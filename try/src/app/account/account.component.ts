import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  profile: any;
  fbprofile: any;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  personalForm = new FormGroup({
    name: new FormControl(null, Validators.required)
  });

  // tslint:disable-next-line:max-line-length
  constructor(private serverService: ServerService, private router: Router, private authService: AUTHService, private facebookService: FacebookService) { }

  ngOnInit() {
    console.log(this.authService.token);
    if (this.facebookService.user) {
      this.fbprofile = this.facebookService.user;
    }
    this.serverService.getName().subscribe((data) => {
      if (JSON.parse(data['_body']) == undefined) {
        return false;
      }
      const ref = Object.values(JSON.parse(data['_body']));
      ref.forEach((name) => {
        if (name.id === this.authService.token) {
          this.profile = name.name;
        }
      });
    });
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
      const ticket = this.authService.token || this.facebookService.user.id;
      ref.forEach((news) => {
        if (news.id === ticket) {
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
      const ticket = this.authService.token || this.facebookService.user.id;
      ref.forEach((news) => {
        if (news.id === ticket) {
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
      const ticket = this.authService.token || this.facebookService.user.id;
      ref.forEach((charger) => {
        if (charger.id === ticket) {
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
      const ticket = this.authService.token || this.facebookService.user.id;
      ref.forEach((bin) => {
        if (bin.id === ticket) {
          this.bins.push(bin);
        }
      });
    });
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

  form(form: any) {
    this.serverService.postName({name: form.value.name, id: this.authService.token}).subscribe();
    this.profile = form.value.name;
    form.reset();
  }
}
