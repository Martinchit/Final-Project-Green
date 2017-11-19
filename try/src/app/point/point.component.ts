import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

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

  constructor(private serverService: ServerService) { }

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
    console.log(input);
    window.open('https://www.google.com.hk/maps/dir/' + this.lat + ',' + this.lng + '/' + input.lat + ',' + input.lng);
  }
}
