import { WeatherInterface } from '@app/weather/models/weather.model';

export function weatherMapper(weather: WeatherInterface): WeatherInterface {
	return {
    coord: weather.coord,
    weather: weather.weather,
    main: weather.main,
    wind: weather.wind,
    sys: weather.sys,
    id: weather.id,
    name: weather.name,
	};
}
