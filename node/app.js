const Express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const reload = require('reload');
const watch = require('watch');
const Model = require('./models');
const haversine = require('haversine-distance');
const Bcrypt = require('./bcrypt');
const auth = require('./auth')();
const client = require('./redis');
const jwt = require('jwt-simple');
const config = require('./config');
const app = Express();


app.use(bodyParser.json());
app.use(auth.initialize());

app.get('/api/station/location', (req, res) => {
    let obj = [];
    var parseString = require('xml2js').parseString;
    axios.get('https://opendata.clp.com.hk/GetChargingSectionXML.aspx?lang=EN').then((data) => {
        parseString(data.data, function (err, result) {
            console.log(result)
            console.log(result.ChargingStationData.stationList);
                // result.ChargingStationData.stationList[0].station.forEach((destination) => {
                //     Model.stations.findOrCreate({
                //         where : {
                //             key: destination.no[0]
                //         }, defaults: {
                //             key: destination.no[0],
                //             location: destination.location[0]? destination.location[0]: null,
                //             lat: destination.lat[0]? destination.lat[0]: null,
                //             lng: destination.lng[0]? destination.lng[0]: null,
                //             districtL: destination.districtL[0]? destination.districtL[0] : null,
                //             districtS: destination.districtS[0] === 'Outlying Islands'? 'Tung Chung' : destination.districtS[0] ? destination.districtS[0] : null,
                //             address: destination.address[0],
                //             provider: provider(destination.address[0])? provider(destination.address[0]) : tesla(destination.parkingNo[0])? tesla(destination.parkingNo[0]) : destination.provider[0],
                //             parkingNo: lot(destination.address[0])? lot(destination.address[0]) : destination.parkingNo[0]? destination.parkingNo[0] : null
                //         }
                //     }).spread((user, created) => {
                //     }).catch((err) => {console.log(err);});
                // }); 
        });
        // Model.stations.findAll({}).then((data) => {
        //     data.forEach((info) => {
        //         obj.push(info.dataValues);
        //     });
        //     res.json(obj);
        // });

    });
});

app.post('/api/station/closest', (req, res) => {
    Model.stations.findAll({}).then((data) => {
        console.log(data);
        let stations = data.map((station) => {
            const stationGeo = {
                lat: Number(station.dataValues.lat),
                lng: Number(station.dataValues.lng)
            };
            var obj = {
                name: station.location,
                address: station.address,
                districtS: station.districtS,
                districtL: station.districtL,
                lat: station.lat,
                lng: station.lng,
                provider: station.provider,
                distance: Number((haversine(req.body, stationGeo) / 1000).toFixed(2)),
                parkingNo: station.parkingNo || 'Unknown'
            };
            return obj;
        }).sort(compareDistance);
        res.json(stations);
    });
});

app.post('/api/signUp', (req, res) => [
    Bcrypt.hashPassword(req.body.password).then((hash) => {
        client.hgetall('recyclers', (err, data) => {
            if (data !== null) {
                let obj = data;
                obj[req.body.email] = JSON.stringify({
                    email: req.body.email,
                    password: hash
                });
                client.del('recyclers');
                client.hmset('recyclers', obj);
                let payload = {
                    id: req.body.email
                };
                let token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    token: token
                });
            } else {
                let obj = {}
                obj[req.body.email] = JSON.stringify({
                    email: req.body.email,
                    password: hash
                });
                console.log(obj);
                client.hmset('recyclers', obj);
                let payload = {
                    id: req.body.email
                };
                let token = jwt.encode(payload, config.jwtSecret);
                res.json(token);
            }
        });

    })
]);

app.post('/api/logIn', (req, res) => {
    if (req.body.email && req.body.password) {
            client.hgetall('recyclers', (err, data) => {
                let users = Object.values(data).map((user) => {
                    return JSON.parse(user)
                });
                let verify = users.find((user) => {
                    return user.email === req.body.email;
                });
                console.log(verify);
                Bcrypt.checkPassword(req.body.password, verify.password).then((result) => {
                    console.log(result)
                    if(result) {
                        let payload = {
                            id: verify.email
                        };  
                        let token = jwt.encode(payload, config.jwtSecret);
                        res.json(token);
                    }  else {
                    res.sendStatus(401);
                    }
                });
            });
    } else {
            res.sendStatus(401);
    }
});

app.post('/api/recyclingBin', (req, res) => {
    console.log(req.body);
    axios.get('https://api.data.gov.hk/v1/nearest-recyclable-collection-points?lat=' + req.body.lat + '&long=' + req.body.lng + '&max=10').then((bins) => {
        let obj = bins.data.results.map((bin) => {
            const binGeo = {
                lat: Number(bin['lat-long'][0]),
                lng: Number(bin['lat-long'][1])
            };
            let obj = {
                location: bin['address1-en'],
                district: bin.district.replace('_', ' '),
                wasteType: bin['waste-type'].replace(/\,/g, ",   "),
                lat: bin['lat-long'][0],
                lng: bin['lat-long'][1],
                id: bin.id,
                distance: Number((haversine(req.body, binGeo) / 1000).toFixed(2))
            }
            return obj;
        })
        res.json(obj);
    });
});

app.get('/api/news', (req, res) => {
    axios.get('https://newsapi.org/v2/everything?q=environment&sources=new-scientist,national-geographic,business-insider&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').then((data) => {
        res.json(data.data.articles)
    })
})

app.post('/api/selected_news', (req, res) => {
    axios.get('https://newsapi.org/v2/everything?q=environment&sources=' + req.body.choice + '&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').then((data) => {
        res.json(data.data.articles)
    })
})

reloadServer = reload(app);
watch.watchTree(__dirname + "/frontend", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.use(Express.static('frontend'));

app.use(function (req, res, next) {
    res.sendFile(__dirname + "/frontend/index.html");
});

app.listen(8080);

function provider(input) {
    switch (input) {
        case 'The Peak Galleria Carpark, B1/F \r\n118 Peak Road, The Peak, Hong Kong':
            return 'HKE';
        case 'Star Ferry Carpark 1/F,9 Edinburgh Place, Central, Hong Kong':
            return 'HKE';
        case 'Cityplaza, Carpark B3 \r\n18 Taikoo Shing Road, Taikoo Shing, Hong Kong':
            return 'HKE';
        case 'Oi Tung Estate Carpark, 2/F, \r\nOi Tung Estate, Shau Kei Wan, Hong Kong':
            return 'HKE';
        case 'Tin Hau Carpark, 3/F, \nLau Sin Street &amp; Electric Road Junction, Tin Hau, Hong Kong':
            return 'HKE';
        case 'Cyberport Car Park 1, 2/F\r\nCyberport 2, 100 Cyberport Road, Hong Kong':
            return 'HKE';
        case 'HEC ex-Operational Headquarters, G/F\r\n2 Yi Nga Drive, Ap Lei Chau, Hong Kong':
            return 'HKE';
        case 'Yue Wan Estate Carpark, Eastern District, Hong Kong':
            return 'HKE';
        case 'Yue Wan Estate Carpark, Eastern District, Hong Kong':
            return 'HKE';
        default:
            return false;
    }
}

function lot(input) {
    switch (input) {
        case 'The Peak Galleria Carpark, B1/F \r\n118 Peak Road, The Peak, Hong Kong':
            return '60';
        case 'Star Ferry Carpark 1/F,9 Edinburgh Place, Central, Hong Kong':
            return '311, 317, 318 & 321';
        case 'Cityplaza, Carpark B3 \r\n18 Taikoo Shing Road, Taikoo Shing, Hong Kong':
            return '308 & 218';
        case 'Oi Tung Estate Carpark, 2/F, \r\nOi Tung Estate, Shau Kei Wan, Hong Kong':
            return 'P2028';
        case 'Tin Hau Carpark, 3/F, \nLau Sin Street &amp; Electric Road Junction, Tin Hau, Hong Kong':
            return '327,328 & 328A';
        case 'Cyberport Car Park 1, 2/F\r\nCyberport 2, 100 Cyberport Road, Hong Kong':
            return '216, 217';
        case 'HEC ex-Operational Headquarters, G/F\r\n2 Yi Nga Drive, Ap Lei Chau, Hong Kong':
            return 'G/f';
        case 'Yue Wan Estate Carpark, Eastern District, Hong Kong':
            return '84';
        case 'Yue Wan Estate Carpark, Eastern District, Hong Kong':
            return '84';
        default:
            return false;
    }
}

function tesla(input) {
    if (input.trim() === 'Tesla only') {
        return 'Tesla';
    } else if (input === 'BYD only') {
        return 'BYD';
    }
    return false;
}

function compareDistance(a, b) {
    if (a.distance < b.distance) {
        return -1;
    }
    if (a.distance > b.distance) {
        return 1;
    }
    return 0;
}
