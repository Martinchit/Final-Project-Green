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
}
