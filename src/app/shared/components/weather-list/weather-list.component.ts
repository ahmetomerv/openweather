import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '@app/core/services/weather.service';
import { WeatherInterface } from '@app/weather/models/weather.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, OnDestroy {
  
  public cityWeatherList: WeatherInterface[];
  public cityIdGroup: string = '2950159,745042,524901,3067696,2759794';
  private groupCityWeatherSub: Subscription;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.groupCityWeatherSub = this.weatherService.getGroupCityWeatherById(this.cityIdGroup)
      .subscribe(res => {
        if (res) {
          this.cityWeatherList = res;
          this.weatherService.cityWeatherItemChange(res[0]);
        }
      })
  }

  ngOnDestroy(): void {
    this.groupCityWeatherSub.unsubscribe();
  }

}
