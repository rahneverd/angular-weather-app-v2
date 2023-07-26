import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  location: string = '';
  weather: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getLocation().subscribe((location) => {
      this.location = location;
    });
    this.weatherService
      .findWeather(this.location)
      .subscribe((weatherResponse) => {
        console.log(weatherResponse);
        this.weatherService.setWeather(weatherResponse);
        this.weather = weatherResponse;
      });
  }

  ngOnDestroy() {}
}
