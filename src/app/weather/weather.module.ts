import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { CoreModule } from '@app/core/core.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  exports: [
    WeatherComponent,
    WeatherCardComponent,
  ]
})
export class WeatherModule { }
