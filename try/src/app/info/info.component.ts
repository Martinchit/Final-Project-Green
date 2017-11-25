import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Station } from '../station.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '../location.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'angular4-social-login/auth.service';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  stations: Station[] = [];
  address;
  img;

  infoWindowOpened = null;
  locations: any[] = [];
  datas: any[];

  lat = 22.28552;
  lng = 114.15769;
  zoom = 16;

  selfLat;
  selfLng;

  options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  // tslint:disable-next-line:max-line-length
  constructor(private serverService: ServerService, private router: Router, private sanitizer: DomSanitizer, private authService: AUTHService, private facebookService: FacebookService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.selfLat = pos.coords.latitude;
      this.selfLng = pos.coords.longitude;
    }, this.error, this.options);
    this.serverService.getInfo().subscribe((data) => {
      data.forEach(element => {
        const obj = element;
        obj.lat = Number(element.lat);
        obj.lng = Number(element.lng);
        this.locations.push(obj);
      });
      this.stations = data.sort(this.compareDistrict);
    });
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    window.location.reload(true);
  }

  loc(input: any) {
    this.router.navigate(['/home']);
    window.open('https://www.google.com.hk/maps/dir/' + this.selfLat + ',' + this.selfLng + '/' + input.lat + ',' + input.lng);
  }

  getPic(input: any) {
    // tslint:disable-next-line:max-line-length
    const src = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + input.lat + ',' + input.lng + '&fov=90&heading=235&pitch=10&key=AIzaSyB0mZ3F0BF84enpgYtrg7HxS-Ws49Kmyk8';
    this.img = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  more(input: any) {
    this.router.navigate(['/street_view', {
      lat: input.lat,
      lng: input.lng,
      location: JSON.stringify(input)
    }]);
    // tslint:disable-next-line:max-line-length
    // const address = 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g&location=' + input.lat + ',' + input.lng + '&heading=210&pitch=10&fov=35';
    // this.address = this.sanitizer.bypassSecurityTrustResourceUrl(address);
  }

  compareDistrict(a: any, b: any) {
    if (a.districtL[0] < b.districtL[0]) {
        return -1;
    }
    if (a.districtL[0] > b.districtL[0]) {
        return 1;
    }
    return 0;
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
