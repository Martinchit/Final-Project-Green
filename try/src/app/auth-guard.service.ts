import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AUTHService } from './auth.service';
import { FacebookService } from './facebook.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AUTHService, private router: Router, private facebookService: FacebookService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.authService.token);
    console.log(this.authService.isAuthenicated());
    if (this.authService.isAuthenicated() || this.facebookService.isAuthenicated()) {
      return true;
    } else {
      alert('You don\'t have permission to view this page');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
