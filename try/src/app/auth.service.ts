import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable()
export class AUTHService {

  token: string;

  constructor(private http: Http, private router: Router) { }

  signUp(input: any) {
    return this.http.post(environment.hostName + '/api/signUp', input).subscribe((res) => {
      this.token = res.json();
      this.router.navigate(['/account']);
    }, (err) => {
      alert(err);
    });
  }

  logIn(input: any) {
    return this.http.post(environment.hostName + '/api/logIn', input).subscribe((res) => {
      localStorage.setItem('token', res.json());
      this.token = localStorage.getItem('token');
      this.router.navigate(['/account']);
    }, (err) => {
      alert(err);
    });
  }

  isAuthenicated() {
    this.token = localStorage.getItem('token');
    return this.token != undefined;
  }

  logOut() {
    localStorage.removeItem('token');
    return this.token = null;
  }

}
