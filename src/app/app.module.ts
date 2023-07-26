import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { DetailsComponent } from './details/details.component';
import { DilyContainerComponent } from './dily-container/dily-container.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyContainerComponent } from './hourly-container/hourly-container.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    DetailsComponent,
    InfoComponent,
    DilyContainerComponent,
    HourlyContainerComponent,
    ForecastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
