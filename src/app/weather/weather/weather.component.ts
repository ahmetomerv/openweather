import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '@app/core/services/weather.service';
import { Subscription } from 'rxjs';
import { WeatherForecastInterface } from '../models/weather-forecast.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  public currentCityForecast: WeatherForecastInterface[];
  private cityWeatherItemSub: Subscription;
  private cityWeatherForecast: Subscription;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.cityWeatherItemSub = this.weatherService.getCityWeatherItemSubject().subscribe(res => {
      if (res) {
        this.cityWeatherForecast = this.weatherService.getCityWeatherForecastById(res.id).subscribe(forecast => {
          if (forecast) {
            this.currentCityForecast = forecast.slice(0, 8);
          }
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.cityWeatherForecast.unsubscribe();
    this.cityWeatherItemSub.unsubscribe();
  }

}
