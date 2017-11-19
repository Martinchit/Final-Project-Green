const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');
const client = require('./redis');
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = () => {
    const strategy = new passportJWT.Strategy({
        secretOrKey : config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, (payload, done) => {
        const user = users.find((user) => {
            return user.email === payload.email;
        });
        if(user) {
            return done(null, {id: user.email});
        } else {
            return done(new Error('User not found'), null);
        }
    });

    passport.use(strategy);

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenicate: () => {
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
};