import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent {
  constructor(private places: PlacesService, private mapService: MapService) {}

  myLocation() {
    if (!this.places.useLocation) throw Error('No location provided');

    this.mapService.flyTo(this.places.useLocation);
  }
}
