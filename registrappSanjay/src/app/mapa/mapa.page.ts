import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {Plugins} from '@capacitor/core';
const {Geolocation} = Plugins;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {
  currentCenter : any;
  coordinates : any[] = [];
  defaultZoom = 14;
  constructor() { }

ionViewDidEnter() {
  this.getCurrentPosition();
  this.watchPosition();
}

async getCurrentPosition() {
  const coordinates = await Geolocation.getCurrentPosition();
  this.currentCenter = {
    lat: coordinates.coords.latitude,
    lng: coordinates.coords.longitude
  };
}
watchPosition() {
  Geolocation.watchPosition({}, (position, err) => {
    this.currentCenter = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  
    console.log(position);
  });
}
}
