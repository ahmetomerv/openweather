import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    WeatherService
  ],
  declarations: []
})
export class CoreModule { }