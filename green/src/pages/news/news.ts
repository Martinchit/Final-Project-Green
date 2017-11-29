import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ServerService } from '../server.service'
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage implements OnInit {

  source;
  news: any[];
  noPic = '../../assets/imgs/?.jpg';
  token: Observable<any[]>;
  check;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serverService: ServerService, private inAppBrowser: InAppBrowser, private actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
    
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
    this.serverService.getNews().subscribe((data) => {
      this.source = 'National Geographic';
      this.news = data.articles;
    })
  }

  watchNews(newsLink: any) {
    this.inAppBrowser.create(newsLink, '_self')
  }

  show() {
    let actionSheet = this.actionSheetController.create({
      title: 'Source',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'BBC News',
          handler: () => {
            this.serverService.getBBC().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'BBC News';
          }
        }, 
        {
          text: 'Bloomberg',
          handler: () => {
            this.serverService.getBb().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'Bloomberg';
          }
        },
        {
          text: 'Business Insider',
          handler: () => {
            this.serverService.getBI().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'Business Insider';
          }
        },
        {
          text: 'CNN',
          handler: () => {
            this.serverService.getCNN().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'CNN';
          }
        },
        {
          text: 'Fox News',
          handler: () => {
            this.serverService.getFN().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'Fox News';
          }
        },
        {
          text: 'National Geographic',
          handler: () => {
            this.serverService.getNG().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'National Geographic';
          }
        },
        {
          text: 'New Scientist',
          handler: () => {
            this.serverService.getNS().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'New Scientist';
          }
        },
        {
          text: 'The New York Times',
          handler: () => {
            this.serverService.getNYTimes().subscribe((data) => {
              this.news = data.articles;
            })
            this.source = 'The New York Times';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  fav(news: any) {
    let obj = news;
    obj['id'] = this.check;
    this.serverService.postFavNews(obj).subscribe();
    alert('Already Favorited');
  }

}
