import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerService } from '../server.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Observable } from 'rxjs/Observable';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  server = 'https://moregreenhk.website';
  token: Observable<any[]>;
  memory = 'News';
  news: Observable<any[]>;
  chargers: Observable<any[]>;
  bins: Observable<any[]>;
  check: string;

  log = {email: null, pw: null};
  sign = {email: null, pw: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private serverService: ServerService, private launchNavigator: LaunchNavigator, private inAppBrowser: InAppBrowser, private fb: Facebook) {
    
  }

  ionViewDidLoad() {
    if(localStorage.getItem('token')) {
      this.check = JSON.parse(localStorage.getItem('token'))
    }
    this.token = new Observable((observer) => {
      setInterval(() => {
        if(localStorage.getItem('token')) {
          observer.next(JSON.parse(localStorage.getItem('token')));
          this.check = JSON.parse(localStorage.getItem('token'));
        } else {
          observer.next(null);
          this.check = null;
        }
      }, 100)
    })
    // console.log(this.token);
    // if(this.token) {
    //   this.navCtrl.push(InfoPage, {token: this.token});
    // }
    this.news = new Observable((observer) => {
      setInterval(() => {
        this.serverService.getFavNews().subscribe((data) => {
          const value = JSON.parse(data['_body']);
          let ref = [];
          for (var i in value) {
            ref.push(value[i]);
          }
          let output = [];
          ref.forEach((news) => {
            if(news.id === this.check) {
              output.push(news);
            }
          });
          observer.next(output);
        })
      }, 1000)
    })
    this.chargers = new Observable((observer) => {
      setInterval(() => {
        this.serverService.getFavChargers().subscribe((data) => {
          const value = JSON.parse(data['_body']);
          let ref = [];
          for (var i in value) {
            ref.push(value[i]);
          }
          let chargers = [];
          ref.forEach((charger) => {
            if(charger.id === this.check) {
              chargers.push(charger);
            }
          });
          observer.next(chargers);
        })
      }, 1000)
    })
    this.bins = new Observable((observer) => {
      setInterval(() => {
        this.serverService.getFavBins().subscribe((data)=> {
          const value = JSON.parse(data['_body']);
          console.log(value)
          let ref = [];
          for (var i in value) {
            ref.push(value[i]);
          }
          let bins = [];
          ref.forEach(bin => {
            if(bin.id === this.check) {
              bins.push(bin);
            }
          });
          observer.next(bins);
        })
      }, 1000)
    })
  }

  signUp(){
    const obj = {email: this.sign.email, password: this.sign.pw};
    this.sign.email = null;
    this.sign.pw = null;
    return this.http.post(this.server + '/api/signUp', obj).subscribe((res) => {
      localStorage.setItem('token', JSON.stringify(res.json().token));
      console.log(localStorage.getItem('token'));
      this.token = JSON.parse(localStorage.getItem('token'));
      this.check = JSON.parse(localStorage.getItem('token'));
    }, (err) => {
      alert(err);
    })
  }

  logIn() {
    const obj = {email: this.log.email, password: this.log.pw};
    this.log.email = null;
    this.log.pw = null;
    return this.http.post(this.server + '/api/logIn', obj).subscribe((res) => {
      localStorage.setItem('token', JSON.stringify(res.json()));
      console.log(localStorage.getItem('token'));
      this.token = JSON.parse(localStorage.getItem('token'));
      this.check = JSON.parse(localStorage.getItem('token'));
    }, (err) => {
      alert('Email or Passsword is Incorrect!');
    })
  }

  infoC(charger: any) {
    let options: LaunchNavigatorOptions = {
      transportMode: "driving"
    };
    const loc = charger.lat + ',' + charger.lng;
    this.launchNavigator.navigate(loc, options);
  }

  infoB(bin: any) {
    let options: LaunchNavigatorOptions = {
      transportMode: "walking"
    };
    const loc = bin.lat + ',' + bin.lng;
    this.launchNavigator.navigate(loc, options);
  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
    this.check = null;
  }

  watchNews(newsLink: any) {
    this.inAppBrowser.create(newsLink, '_self')
  }
  
  f() {
    this.fb.login(['public_profile', 'email']).then((res) => {
      localStorage.setItem('token', res.authResponse.userID);
      this.check = res.authResponse.userID;
    }).catch((err) => {
      console.log('Error logging into Facebook', err)
    });
  }

}
