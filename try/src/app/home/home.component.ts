import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private serverService: ServerService) { }

  news: any;

  ngOnInit() {
    this.serverService.getNews().subscribe((data) => {
      this.news = data;
      console.log(this.news);
    });
  }

  url(input: any) {
    window.open(input.url, '', 'width=800,height=600');
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



}
