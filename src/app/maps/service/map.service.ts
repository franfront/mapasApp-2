import { Feature } from './../interfaces/places';
import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map; // ? siginifica que es opcional y puede ser undefined

  private markers: Marker[] = [];

  get isMapReady(): boolean {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('Map is not ready');

    this.map?.flyTo({ center: coords, zoom: 14 });
  }

  createMarker(places: Feature[], userLocation: [number, number]) {
    if (!this.map) throw Error('Map is not ready');

    this.markers.forEach((marker) => marker.remove());

    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`<h6>${place.text}</h6>
        <span>${place.place_name}</span>
      `);

      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);

      newMarkers.push(newMarker);
    }
    this.markers = newMarkers;

    if (places.length === 0) return;

    // limites del mapa
    const bounds = new LngLatBounds();

    newMarkers.forEach((marker) => bounds.extend(marker.getLngLat()));
    bounds.extend(userLocation);

    this.map.fitBounds(bounds, {
      padding: 200,
    });
  }
}
