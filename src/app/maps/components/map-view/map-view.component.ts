import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(private places: PlacesService, private mapService: MapService) {}
  ngAfterViewInit(): void {
    if (!this.places.useLocation) throw Error('No location provided');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/dark-v11', // style URL
      center: this.places.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(
      `<h6>Aqui estoy</h6> <span> Estoy en este lugar</span>`
    );

    const marker = new Marker({ color: 'blue' })
      .setLngLat(this.places.useLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }
}
