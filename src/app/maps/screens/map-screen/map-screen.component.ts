import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css'],
})
export class MapScreenComponent {
  constructor(private places: PlacesService) {}

  get isUserLocationReady() {
    return this.places.isUserLocationReady;
  }
}
