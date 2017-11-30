import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { environment } from '../environments/environment.prod';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  server = 'www.moregreenhk.website';

  getInfo() {
    return this.http.get( this.server + '/api/station/location').map((res) => res.json());
  }

  getNearestStation(geo: any) {
    return this.http.post( this.server + '/api/station/closest', geo).map((res) => res.json());
  }

  getBin(geo: any) {
    return this.http.post( this.server + '/api/recyclingBin', geo).map((res) => res.json());
  }

  getNews() {
    return this.http.get( this.server + '/api/news').map((res) => res.json());
  }

  getSelectedNews(source: string) {
    return this.http.post( this.server + '/api/selected_news', source).map((res) => res.json());
  }

  postFavChargers(chargers: any) {
    return this.http.post('https://finalprojectstations.firebaseio.com/.json', chargers);
  }

  getFavChargers() {
    return this.http.get('https://finalprojectstations.firebaseio.com/.json');
  }

  postFavBins(bins: any) {
    return this.http.post('https://finalproject-d3288.firebaseio.com/.json', bins);
  }

  getFavBins() {
    return this.http.get('https://finalproject-d3288.firebaseio.com/.json');
  }

  postFavNews(news: any) {
    return this.http.post('https://finalprojectnews.firebaseio.com/.json', news);
  }

  getFavNews() {
    return this.http.get('https://finalprojectnews.firebaseio.com/.json');
  }
  getName() {
    return this.http.get('https://finalprojectname.firebaseio.com/.json');
  }
  postName(name: any) {
    return this.http.post('https://finalprojectname.firebaseio.com/.json', name);
  }
}
