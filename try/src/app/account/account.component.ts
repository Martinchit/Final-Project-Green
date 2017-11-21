import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';
import { AUTHService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  news: any[];
  chargers: any[];
  bins: any[];
  lat: number;
  lng: number;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(private serverService: ServerService, private router: Router, private authService: AUTHService) { }

  ngOnInit() {
    this.news = [];
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }, this.error, this.options);
    this.serverService.getFavNews().subscribe((data) => {
      if (JSON.parse(data['_body']) == undefined) {
        return false;
      }
      const ref = Object.values(JSON.parse(data['_body']));
      ref.forEach((news) => {
        if (news.email === this.authService.token) {
          this.news.push(news);
        }
      });
    });
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    window.location.reload(true);
  }

  getNews() {
    this.chargers = null;
    this.bins = null;
    this.news = [];
    this.serverService.getFavNews().subscribe((data) => {
      if (JSON.parse(data['_body']) == undefined) {
        return false;
      }
      const ref = Object.values(JSON.parse(data['_body']));
      ref.forEach((news) => {
        if (news.email === this.authService.token) {
          this.news.push(news);
        }
      });
    });
  }
  url(input: any) {
    window.open(input.url, '', 'width=800,height=600');
  }

  getChargers() {
    this.news = null;
    this.bins = null;
    this.chargers = [];
    this.serverService.getFavChargers().subscribe((data) => {
      if (JSON.parse(data['_body']) == undefined) {
        return false;
      }
      const ref = Object.values(JSON.parse(data['_body']));
      ref.forEach((charger) => {
        if (charger.email === this.authService.token) {
          this.chargers.push(charger);
        }
      });
    });
  }

  getBins() {
    this.news = null;
    this.chargers = null;
    this.bins = [];
    this.serverService.getFavBins().subscribe((data) => {
      if (JSON.parse(data['_body']) == undefined) {
        return false;
      }
      const ref = Object.values(JSON.parse(data['_body']));
      ref.forEach((bin) => {
        if (bin.email === this.authService.token) {
          this.bins.push(bin);
        }
      });
    });
  }
  loc(input: any) {
    console.log(input);
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
  }
}
