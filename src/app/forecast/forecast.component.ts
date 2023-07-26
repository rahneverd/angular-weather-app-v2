import { Component } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  forecastType: string = 'daily';

  changeForecast(forecastType: string) {
    this.forecastType = forecastType;
  }
}
