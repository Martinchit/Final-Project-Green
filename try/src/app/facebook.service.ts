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
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    // });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
    this.router.navigate(['/account']);
  }

  signOut(): void {
    this.user = null;
    this.authService.signOut();
  }

  isAuthenicated() {
    return this.user != undefined;
  }

}
