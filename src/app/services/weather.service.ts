import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/weather";
  city:any =[];

  constructor(private httpClient: HttpClient) { }

  sendReqToSearchCity(obj) {
    return this.httpClient.get<{ result: any }>(`${this.weatherURL}/${JSON.stringify(this.city)}`)
  }
  // sendReqToSearchCity(weatherObj){return this.httpClient.post<{ result: any }>(this.weatherURL, weatherObj);

  // }
  
}
