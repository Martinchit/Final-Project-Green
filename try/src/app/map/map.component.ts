import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs/Observable';
import { Location } from '../location.model';
import { Station } from '../station.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  location: any;
  address;

  // address;
  // img;

  // infoWindowOpened = null;
  // locations: any[] = [];
  // datas: any[];

  // lat = 22.28552;
  // lng = 114.15769;
  // zoom = 16;

  // tslint:disable-next-line:max-line-length
  constructor(private serverService: ServerService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private authService: AUTHService, private facebookService: FacebookService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.lat = params['lat'];
      this.lng = params['lng'];
      this.location = JSON.parse(params['location']);
      // tslint:disable-next-line:max-line-length
      const address = 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g&location=' + this.lat + ',' + this.lng + '&heading=210&pitch=10&fov=35';
      this.address = this.sanitizer.bypassSecurityTrustResourceUrl(address);
      // this.ref.forEach((item, index) => {
      //   if (item.name === this.playerName) {
      //     this.playerAge = item.age;
      //     this.playerTeam = item.team;
      //   }
      // });
    });

    // this.serverService.getInfo().subscribe((data) => {
    //   data.forEach(element => {
    //     const obj = element;
    //     obj.lat = Number(element.lat);
    //     obj.lng = Number(element.lng);
    //     this.locations.push(obj);
    //   });
    // });
  }

  // getPic(input: any) {
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   const src = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + input.lat + ',' + input.lng + '&fov=90&heading=235&pitch=10&key=AIzaSyB0mZ3F0BF84enpgYtrg7HxS-Ws49Kmyk8';
  //   this.img = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  // }

  // more(input: any) {
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   const address = 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g&location=' + input.lat + ',' + input.lng + '&heading=210&pitch=10&fov=35';
  //   this.address = this.sanitizer.bypassSecurityTrustResourceUrl(address);
  // }

  logout() {
    this.authService.logOut();
    this.facebookService.signOut();
  }

}
