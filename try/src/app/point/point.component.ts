import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {

  lat: number;
  lng: number;
  arruracy: number;
  stations: any[];

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(private serverService: ServerService, private authService: AUTHService, private facebookService: FacebookService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }, this.error, this.options);
    this.serverService.getInfo().subscribe((data) => {
    });
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    window.location.reload(true);
  }

  getStation() {
    this.serverService.getNearestStation({lat: this.lat, lng: this.lng}).subscribe((data) => {
      this.stations = data.slice(0, 20);
    });
  }

  loc(input: any) {
    window.open('https://www.google.com.hk/maps/dir/' + this.lat + ',' + this.lng + '/' + input.lat + ',' + input.lng);
  }

  logout() {
    this.authService.logOut();
    this.facebookService.signOut();
  }
  favorite(input: any) {
    // tslint:disable-next-line:prefer-const
    const ref = this.authService.token || this.facebookService.user.id;
    let obj = input;
    obj['id'] = ref;
    return this.serverService.postFavChargers(obj).subscribe();
  }
}
