import { Injectable, OnInit } from '@angular/core';
import { FacebookLoginProvider } from 'angular4-social-login';
import { AuthService } from 'angular4-social-login';
import { Router } from '@angular/router';


@Injectable()
export class FacebookService implements OnInit {

  user: any;
  // clicked = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('fbtoken'));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      localStorage.setItem('fbtoken', JSON.stringify(user));
      this.user = JSON.parse(localStorage.getItem('fbtoken'));
      console.log(this.user);
      if (this.user) {
        this.router.navigate(['/account']);
      }
    });
  }

  signOut(): void {
    if (this.user) {
      localStorage.removeItem('fbtoken');
      this.user = null;
      this.authService.signOut();
    }
  }

  isAuthenicated() {
    if (localStorage.getItem('fbtoken')) {
      this.user = JSON.parse(localStorage.getItem('fbtoken'));
    }
    return this.user != undefined;
  }

}
