import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ServerService } from '../server.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the BinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bin',
  templateUrl: 'bin.html',
})
export class BinPage {

  bins: any[];
  check;
  token: Observable<any[]>;

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
      this.serverService.getNearestBin(loc).subscribe((bins) => {
        const nearestBins = bins.slice(0,10);
        this.bins = nearestBins;
      })
    })
  }

  info(bin: any) {
    let options: LaunchNavigatorOptions = {
      transportMode: "walking"
    };
    const loc = bin.lat + ',' + bin.lng;
    this.launchNavigator.navigate(loc, options);
  }

  refresh() {
    this.geolocation.getCurrentPosition().then((geo) => {
      let loc = {lat: geo.coords.latitude, lng: geo.coords.longitude};
      this.serverService.getNearestBin(loc).subscribe((bins) => {
        const nearestBins = bins.slice(0,10);
        this.bins = nearestBins;
      })
    })
    let loader = this.loadingCtrl.create({
      content: "Updating...",
      duration: 2000
    });
    loader.present();
  }

  fav(news: any) {
    let obj = news;
    obj['id'] = this.check;
    console.log(obj);
    this.serverService.postFavBins(obj).subscribe();
    alert('Already Favorited');
  }
}
