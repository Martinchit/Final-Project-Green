import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServerService } from '../server.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: Observable<string>;

  newsForm = new FormGroup({
    choice: new FormControl(null, Validators.required)
  });


  constructor(private serverService: ServerService, private authService: AUTHService, private facebookService: FacebookService) { }

  news: any;

  ngOnInit() {
    this.token = new Observable((observer) => {
      setInterval(() => {
        const ref = this.authService.token || this.facebookService.user;
        observer.next(ref);
      }, 500);
    });
    this.serverService.getNews().subscribe((data) => {
      this.news = data;
    });
  }

  url(input: any) {
    window.open(input.url, '', 'width=800,height=600');
  }

  choice(form: any) {
    this.serverService.getSelectedNews(form.value).subscribe((data) => {
      this.news = data;
    });
  }

  // success(pos) {
  //   const crd = pos.coords;
  //   console.log(crd);
  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  //   const lat = pos.coords.latitude;
  //   console.log(this.lat);
  // }

  favorite(input: any) {
    // tslint:disable-next-line:prefer-const
    let ref = this.authService.token || Number(this.facebookService.user.id);
    let obj = input;
    obj['id'] = ref;
    return this.serverService.postFavNews(obj).subscribe();
  }

  logout() {
    this.authService.logOut();
    this.facebookService.signOut();
  }

}
