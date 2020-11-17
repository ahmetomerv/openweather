import { WeatherCity } from '@app/weather/models/weather-city.model';
import { WeatherForecastResponseInterface } from '@app/weather/models/weather-forecast-response.model';
import { WeatherForecastInterface } from '@app/weather/models/weather-forecast.model';

export function weatherForecastResponseMapper(response: WeatherForecastResponseInterface): WeatherForecastInterface[] {
  return response.list.map(x => weatherForecastMapper(x, response.city));
}

function weatherForecastMapper(weather: WeatherForecastInterface, city: WeatherCity): WeatherForecastInterface {
  return {
    main: weather.main,
    weather: weather.weather,
    wind: weather.wind,
    dt_txt: weather.dt_txt.replace(/\s/g, "T") + 'Z',
    city: city,
  }
}
