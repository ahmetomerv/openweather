import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemperatureDegreePipe } from './pipes/temperature-degree.pipe';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [
    TemperatureDegreePipe,
    WeatherItemComponent,
    WeatherListComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    LoadingService,
  ],
  exports: [
    TemperatureDegreePipe,
    WeatherItemComponent,
    WeatherListComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
