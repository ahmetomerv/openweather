export interface WeatherInterface {
  coord: {
    lon: number,
    lat: number,
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunries: number;
    sunset: number;
  };
  id: number;
  name: string;
}
