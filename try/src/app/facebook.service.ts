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
    this.user = JSON.parse(localStorage.getItem('token'));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      localStorage.setItem('token', JSON.stringify(user));
      this.user = JSON.parse(localStorage.getItem('token'));
    });
    this.router.navigate(['/account']);
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.user = null;
    this.authService.signOut();
  }

  isAuthenicated() {
    if (localStorage.getItem('token')) {
      this.user = JSON.parse(localStorage.getItem('token'));
    }
    return this.user != undefined;
  }

}
