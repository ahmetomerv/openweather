import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { EnvironmentService } from '@env/environment.service';
import { weatherMapper } from './mappers/weather.mapper';
import { WeatherInterface } from '@app/weather/models/weather.model';
import { groupWeatherMapper } from './mappers/group-weather.mapper';
import { WeatherForecastInterface } from '@app/weather/models/weather-forecast.model';
import { weatherForecastResponseMapper } from './mappers/weather-forecast.mapper';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class WeatherService {

  cityWeatherItem$ = new Subject<any>();

  constructor (
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) {}

  public cityWeatherItemChange(value: any): void {
		this.cityWeatherItem$.next(value);
  }

  public getCityWeatherItemSubject(): Subject<any> {
		return this.cityWeatherItem$;
  }

  public getCityWeatherByName(query: string): Observable<WeatherInterface> {
    const params = new HttpParams({
      fromObject: {
        appid: this.environmentService.apiKey,
        q: query,
      }
    })

    return this.apiService
      .get('/weather', params)
      .pipe(
        map(weatherMapper)
      );
  }

  public getGroupCityWeatherById(idGroup: string): Observable<WeatherInterface[]> {
    const params = new HttpParams({
      fromObject: {
        appid: this.environmentService.apiKey,
        id: idGroup,
      }
    })

    return this.apiService
      .get('/group', params)
      .pipe(
        map(groupWeatherMapper)
      )
  }

  public getCityWeatherForecastByName(query: string): Observable<WeatherForecastInterface[]> {
    const params = new HttpParams({
      fromObject: {
        appid: this.environmentService.apiKey,
        q: query,
      }
    })

    return this.apiService
      .get('/forecast', params)
      .pipe(
        map(weatherForecastResponseMapper)
      )
  }

  public getCityWeatherForecastById(id: string): Observable<WeatherForecastInterface[]> {
    const params = new HttpParams({
      fromObject: {
        appid: this.environmentService.apiKey,
        id: id,
      }
    })

    return this.apiService
      .get('/forecast', params)
      .pipe(
        map(weatherForecastResponseMapper)
      ) 
  }
}
