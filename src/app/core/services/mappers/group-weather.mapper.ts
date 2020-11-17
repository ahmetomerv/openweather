import { GroupWeatherInterface } from '@app/weather/models/group-weather.model';
import { WeatherInterface } from '@app/weather/models/weather.model';
import { weatherMapper } from './weather.mapper';

export function groupWeatherMapper(weather: GroupWeatherInterface): WeatherInterface[] {
	return weather.list.map(weatherMapper)
}
