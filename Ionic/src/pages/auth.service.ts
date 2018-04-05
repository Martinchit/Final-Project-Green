import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { InfoPage } from './info/info';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    token: string;

    constructor(private navCtrl: NavController, private http: Http) { }

    server = 'https://moregreenhk.website';

    signUp(input: any) {
        return this.http.post(this.server + '/api/signUp', input).subscribe((res) => {
            localStorage.setItem('token', res.json());
            this.token = localStorage.getItem('token');
            this.navCtrl.push(InfoPage, this.token);
        }, (err) => {
            alert(err);
        })
    }

    logIn(input: any) {
        return this.http.post(this.server + '/api/logIn', input).subscribe((res) => {
          localStorage.setItem('token', res.json());
          this.token = localStorage.getItem('token');
          this.navCtrl.push(InfoPage, this.token);
        }, (err) => {
          alert(err);
        });
    }
}
