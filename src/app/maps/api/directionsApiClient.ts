import { environment } from './../../../environments/environment';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// HttpClient personalizado
@Injectable({
  providedIn: 'root',
})
export class DirectionApiClient extends HttpClient {
  public baseUrl: string =
    'https://api.mapbox.com/directions/v5/mapbox/walking';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>( url: string,) {
    url = this.baseUrl + url;

    return super.get<T>(url, {
      params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false,
        access_token: environment.apiKey,
      },
    });
  }
}
