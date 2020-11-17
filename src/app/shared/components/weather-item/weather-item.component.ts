import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '@app/core/services/weather.service';
import { WeatherInterface } from '@app/weather/models/weather.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit, OnDestroy {

  @Input()
  public item: WeatherInterface;

  public selectedItem: WeatherInterface;
  private cityWeatherSub: Subscription;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.listenToCityWeatherChange();
  }

  ngOnDestroy(): void {
    this.cityWeatherSub.unsubscribe();
  }
  
  public itemClickHandler(): void {
    if (this.item) {
      this.weatherService.cityWeatherItemChange(this.item);
    }
  }

  private listenToCityWeatherChange(): void {
    this.cityWeatherSub = this.weatherService.getCityWeatherItemSubject().subscribe(res => {
      this.selectedItem = res;
    });
  }

}
