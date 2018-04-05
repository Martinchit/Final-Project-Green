import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ServerService } from '../server.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChargerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charger',
  templateUrl: 'charger.html',
})
export class ChargerPage {

  chargers: any[];
  token: Observable<any[]>;
  check;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private serverService: ServerService, private launchNavigator: LaunchNavigator, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.token = new Observable((observer) => {
      setInterval(()=> {
        if(localStorage.getItem('token')) {
          observer.next(JSON.parse(localStorage.getItem('token')));
          this.check = JSON.parse(localStorage.getItem('token'));
        } else {
          observer.next(null);
          this.check = null;
        }
      }, 1000)
    })
   
    this.geolocation.getCurrentPosition().then((geo) => {
      let loc = {lat: geo.coords.latitude, lng: geo.coords.longitude};
      this.serverService.getNearestStation(loc).subscribe((stations) => {
        const nearestStations = stations.slice(0,10);
        this.chargers = nearestStations;
        console.log(this.chargers);
      })
    })
  }

  info(charger: any) {
    let options: LaunchNavigatorOptions = {
      transportMode: "driving"
    };
    const loc = charger.lat + ',' + charger.lng;
    this.launchNavigator.navigate(loc, options);
  }

  refresh() {
    this.geolocation.getCurrentPosition().then((geo) => {
      let loc = {lat: geo.coords.latitude, lng: geo.coords.longitude};
      this.serverService.getNearestStation(loc).subscribe((stations) => {
        const nearestStations = stations.slice(0,10);
        this.chargers = nearestStations;
        console.log(this.chargers);
      })
    })
    let loader = this.loadingCtrl.create({
      content: "Updating...",
      duration: 2000
    });
    loader.present();
  }

  fav(charger: any) {
    let obj = charger;
    obj['id'] = this.check;
    this.serverService.postFavChargers(obj).subscribe();
    alert('Already Favorited');
  }

}
