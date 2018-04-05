import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';


@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.css']
})
export class RecycleComponent implements OnInit {

  lat: number;
  lng: number;
  bins: any[];

  options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 0
  };

  // tslint:disable-next-line:max-line-length
  constructor(private serverService: ServerService, private router: Router, private authService: AUTHService, private facebookService: FacebookService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }, this.error, this.options);
    this.serverService.getInfo().subscribe((data) => {
    });
  }

  getBin() {
    this.serverService.getBin({lat: this.lat, lng: this.lng}).subscribe((data) => {
      this.bins = data;
    });
  }


  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    window.location.reload(true);
  }

  loc(input: any) {
    window.open('https://www.google.com.hk/maps/dir/' + this.lat + ',' + this.lng + '/' + input.lat + ',' + input.lng);
  }

  view(input: any) {
    this.router.navigate(['/street_view', {
      lat: input.lat,
      lng: input.lng,
      location: JSON.stringify(input)
    }]);
  }

  logout() {
    this.authService.logOut();
    this.facebookService.signOut();
  }

  favorite(input: any) {
    // tslint:disable-next-line:prefer-const
    const ref = this.authService.token || Number(this.facebookService.user.id);
    let obj = input;
    obj['id'] = ref;
    return this.serverService.postFavBins(obj).subscribe();
  }

}
