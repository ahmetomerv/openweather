import { WeatherCity } from './weather-city.model';
import { WeatherForecastInterface } from './weather-forecast.model';

export interface WeatherForecastResponseInterface {
  message: number;
  cnt: number;
  list: WeatherForecastInterface[];
  city: WeatherCity;
}
