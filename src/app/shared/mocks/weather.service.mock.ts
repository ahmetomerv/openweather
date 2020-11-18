import { Injectable } from '@angular/core';
import { WeatherForecastInterface } from '@app/weather/models/weather-forecast.model';
import { WeatherInterface } from '@app/weather/models/weather.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class WeatherMockService {

  cityWeatherItem$ = new BehaviorSubject({
    coord: {
      lon: 4.89,
      lat: 52.37
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n'
      }
    ],
    main: {
      temp: 281.76,
      feels_like: 278.8,
      temp_min: 280.93,
      temp_max: 283.15,
      pressure: 1017,
      humidity: 87
    },
    wind: {
      speed: 3.1,
      deg: 170
    },
    sys: {
      type: 1,
      id: 1524,
      country: 'NL',
      sunrise: 1605164219,
      sunset: 1605196347
    },
    id: 2759794,
    name: 'Amsterdam',
  });

  constructor () {}

  public cityWeatherItemChange(value: WeatherInterface): void {
		this.cityWeatherItem$.next({
      coord: {
        lon: 4.89,
        lat: 52.37
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      main: {
        temp: 281.76,
        feels_like: 278.8,
        temp_min: 280.93,
        temp_max: 283.15,
        pressure: 1017,
        humidity: 87
      },
      wind: {
        speed: 3.1,
        deg: 170
      },
      sys: {
        type: 1,
        id: 1524,
        country: 'NL',
        sunrise: 1605164219,
        sunset: 1605196347
      },
      id: 2759794,
      name: 'Amsterdam',
    });
  }

  public getCityWeatherItemSubject(): BehaviorSubject<WeatherInterface> {
		return this.cityWeatherItem$;
  }

  public getGroupCityWeatherById(): Observable<WeatherInterface[]> {
    return of([
      {
        coord: {
          lon: 4.89,
          lat: 52.37
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        main: {
          temp: 281.76,
          feels_like: 278.8,
          temp_min: 280.93,
          temp_max: 283.15,
          pressure: 1017,
          humidity: 87
        },
        wind: {
          speed: 3.1,
          deg: 170
        },
        sys: {
          type: 1,
          id: 1524,
          country: 'NL',
          sunrise: 1605164219,
          sunset: 1605196347
        },
        id: 2759794,
        name: 'Amsterdam',
      },
      {
        coord: {
          lon: 4.89,
          lat: 52.37
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        main: {
          temp: 281.76,
          feels_like: 278.8,
          temp_min: 280.93,
          temp_max: 283.15,
          pressure: 1017,
          humidity: 87
        },
        wind: {
          speed: 3.1,
          deg: 170
        },
        sys: {
          type: 1,
          id: 1524,
          country: 'NL',
          sunrise: 1605164219,
          sunset: 1605196347
        },
        id: 2759794,
        name: 'Amsterdam',
      }
    ])
  }

  public getCityWeatherByName(): Observable<WeatherInterface> {
      return of({
        coord: {
          lon: 4.89,
          lat: 52.37
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        main: {
          temp: 281.76,
          feels_like: 278.8,
          temp_min: 280.93,
          temp_max: 283.15,
          pressure: 1017,
          humidity: 87
        },
        wind: {
          speed: 3.1,
          deg: 170
        },
        sys: {
          type: 1,
          id: 1524,
          country: 'NL',
          sunrise: 1605164219,
          sunset: 1605196347
        },
        id: 2759794,
        name: 'Amsterdam',
      });
  }

  public getCityWeatherForecastByName(): Observable<WeatherForecastInterface[]> {
    return of([
      {
        city: {
          id: 745042,
          name: 'Istanbul',
          coord: {
            lat: 41.0351,
            lon: 28.9833
          },
          country: 'TR',
          population: 11581707,
          timezone: 10800,
          sunrise: 1605675336,
          sunset: 1605710598
        },
        main: {
          temp: 285.33,
          feels_like: 283.41,
          temp_min: 285.33,
          temp_max: 285.86,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1021,
          humidity: 77,
          temp_kf: -0.53
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        wind: {
          speed: 2.17,
          deg: 28
        },
        dt_txt: '2020-11-18 00:00:00'
      },
      {
        city: {
          id: 745042,
          name: 'Istanbul',
          coord: {
            lat: 41.0351,
            lon: 28.9833
          },
          country: 'TR',
          population: 11581707,
          timezone: 10800,
          sunrise: 1605675336,
          sunset: 1605710598
        },
        main: {
          temp: 285.33,
          feels_like: 283.41,
          temp_min: 285.33,
          temp_max: 285.86,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1021,
          humidity: 77,
          temp_kf: -0.53
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        wind: {
          speed: 2.17,
          deg: 28
        },
        dt_txt: '2020-11-18 00:00:00'
      }
    ]);
  }

  public getCityWeatherForecastById(idGroup: string): Observable<WeatherForecastInterface[]> {
    return of([
      {
        city: {
          id: 745042,
          name: 'Istanbul',
          coord: {
            lat: 41.0351,
            lon: 28.9833
          },
          country: 'TR',
          population: 11581707,
          timezone: 10800,
          sunrise: 1605675336,
          sunset: 1605710598
        },
        main: {
          temp: 285.33,
          feels_like: 283.41,
          temp_min: 285.33,
          temp_max: 285.86,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1021,
          humidity: 77,
          temp_kf: -0.53
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        wind: {
          speed: 2.17,
          deg: 28
        },
        dt_txt: '2020-11-18 00:00:00'
      },
      {
        city: {
          id: 745042,
          name: 'Istanbul',
          coord: {
            lat: 41.0351,
            lon: 28.9833
          },
          country: 'TR',
          population: 11581707,
          timezone: 10800,
          sunrise: 1605675336,
          sunset: 1605710598
        },
        main: {
          temp: 285.33,
          feels_like: 283.41,
          temp_min: 285.33,
          temp_max: 285.86,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1021,
          humidity: 77,
          temp_kf: -0.53
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        wind: {
          speed: 2.17,
          deg: 28
        },
        dt_txt: '2020-11-18 00:00:00'
      }
    ]);
  }

}

export const cityWeather = {
  coord: {
    lon: 4.89,
    lat: 52.37
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02n'
    }
  ],
  main: {
    temp: 281.76,
    feels_like: 278.8,
    temp_min: 280.93,
    temp_max: 283.15,
    pressure: 1017,
    humidity: 87
  },
  wind: {
    speed: 3.1,
    deg: 170
  },
  sys: {
    type: 1,
    id: 1524,
    country: 'NL',
    sunrise: 1605164219,
    sunset: 1605196347
  },
  id: 2759794,
  name: 'Amsterdam',
}