import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  server = 'https://moregreenhk.website';

  constructor(private http: Http) { }

  getNews() {
      return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=national-geographic&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getNG() {
    return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=national-geographic&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getNS() {
    return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=new-scientist&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getBI() {
      return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=business-insider&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getBBC() {
    return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=bbc-news&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getBb() {
    return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=bloomberg&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getCNN() {
    return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=cnn&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res)=> res.json());
  }
  getFN() {
      return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=fox-news&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getNYTimes() {
      return this.http.get('https://newsapi.org/v2/everything?q=environment&sources=the-new-york-times&apiKey=9bf03db1bfd5446badc27f37ab0bad5d').map((res) => res.json());
  }
  getNearestStation(geo: any) {
    return this.http.post(this.server + '/api/station/closest', geo).map((res) => res.json());
  }
  getNearestBin(geo: any) {
    return this.http.post(this.server + '/api/recyclingBin', geo).map((res) => res.json());
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
}
