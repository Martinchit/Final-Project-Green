import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { ServerService } from '../server.service';
import { AccountPage } from '../account/account';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  memory = 'News';
  news;
  chargers;
  bins;
  token;

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator, private serverService: ServerService) {
    this.token = navParams.get('token');
    console.log(this.token);
  }

  ionViewDidLoad() {
    this.serverService.getFavBins().subscribe((data)=> {
      const value = JSON.parse(data['_body']);
      const ref = (<any>Object).values(value);
      this.bins = [];
      ref.forEach(bin => {
        if(bin.id === this.token) {
          this.bins.push(bin);
        }
      });
    })
    this.serverService.getFavChargers().subscribe((data) => {
      const value = JSON.parse(data['_body']);
      const ref = (<any>Object).values(value)
      this.chargers = [];
      ref.forEach((charger) => {
        if(charger.id === this.token) {
          this.chargers.push(charger);
        }
      });
    })
    this.serverService.getFavNews().subscribe((data) => {
      const value = JSON.parse(data['_body']);
      const ref = (<any>Object).values(value)
      this.news = [];
      ref.forEach((news) => {
        if(news.id === this.token) {
          this.news.push(news);
        }
      });
    })
  }

  info(station: any) {
    this.launchNavigator.navigate(station);
  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
    this.navCtrl.push(AccountPage);
  }
}
