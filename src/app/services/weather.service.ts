import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  location = new BehaviorSubject('Islamabad');
  weather = new Subject<any>();
  constructor(private http: HttpClient) {}

  findWeather(location: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        location +
        '&APPID=20f7632ffc2c022654e4093c6947b4f4'
    );
  }

  setLocation(location: string) {
    this.location.next(location);
  }
  setWeather(weather: any) {
    this.weather.next(weather);
  }

  getLocation() {
    return this.location.asObservable();
  }
  getWeather() {
    return this.weather.asObservable();
  }
}
