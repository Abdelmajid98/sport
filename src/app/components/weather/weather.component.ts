import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  bannerDetails: any;
  searchWeatherFrom: FormGroup;
  foundedWeather: any;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.bannerDetails = { title: "Search Weather" };
    this.searchWeatherFrom = this.formBuilder.group({
      city: [""]
    })
  }

  searchCity() {
    this.weatherService.sendReqToSearchCity(this.searchWeatherFrom.value).subscribe((data) => {
      this.foundedWeather = data.result
    })
  }
  

}
