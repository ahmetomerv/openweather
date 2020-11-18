import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureDegreePipe } from '@app/shared/pipes/temperature-degree.pipe';
import { WeatherForecastInterface } from '../models/weather-forecast.model';

import { WeatherCardComponent } from './weather-card.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let forecastData: WeatherForecastInterface[] = [
    {
      main: { temp: 282.62, feels_like: 278.18, temp_min: 282.62, temp_max: 282.62, pressure: 1032, sea_level: 1032, grnd_level: 1027, humidity: 65, temp_kf: 0 },
      weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ],
      wind: { speed: 4.25, deg: 48 },
      dt_txt: '2020-11-22 21:00:00',
      city: { id: 745042, name: 'Istanbul', country: 'TR', population: 11581707, timezone: 10800, sunrise: 1605675336, sunset: 1605710598,
        coord: {
          lat: 41.0351,
          lon: 28.9833
        },
      }
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent, TemperatureDegreePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have city img url list', () => {
    expect(component.cityImgUrl).toBeTruthy();
  });

  it('should render city name in header', () => {
    component.forecast = forecastData;
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('.card-content-header');
    expect(header.innerText.toLowerCase()).toContain(component.forecast[0].city.name.toLowerCase());
  });

  it('getCityImgUrl() should return img url', () => {
    expect(component.getCityImgUrl('moscow')).toContain('url');
  });

  it('getCityImgUrl() should return work if supplied falsy values', () => {
    expect(component.getCityImgUrl(null)).toContain('url');
    expect(component.getCityImgUrl(undefined)).toContain('url');
    expect(component.getCityImgUrl('')).toContain('url');
  });
  
});
