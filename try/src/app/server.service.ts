import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  getInfo() {
    return this.http.get( environment.hostName + '/api/station/location').map((res) => res.json());
  }

  getNearestStation(geo: any) {
    return this.http.post( environment.hostName + '/api/station/closest', geo).map((res) => res.json());
  }

  getBin(geo: any) {
    return this.http.post( environment.hostName + '/api/recyclingBin', geo).map((res) => res.json());
  }

  getNews() {
    return this.http.get(environment.hostName + '/api/news').map((res) => res.json());
  }

  getSelectedNews(source: string) {
    console.log(source);
    return this.http.post(environment.hostName + '/api/selected_news', source).map((res) => res.json());
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
