import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AUTHService } from './auth.service';
import { FacebookService } from './facebook.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AUTHService, private router: Router, private facebookService: FacebookService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.authService.isAuthenicated());
    console.log(this.facebookService.isAuthenicated());
    console.log(this.authService.token);
    console.log(this.facebookService.user);
    if (this.authService.isAuthenicated() || this.facebookService.isAuthenicated()) {
      return true;
    } else {
      alert('Please log in first!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
