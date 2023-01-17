import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor() { 
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {

    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(
          ({coords})=> {
            this.useLocation = [coords.longitude, coords.latitude];
            res(this.useLocation)
            
          },
          (err) =>{
            alert("No se pudo obtener la ubicación")
            console.log(err)
            rej();
          }
        );
        
    });
  }
}
