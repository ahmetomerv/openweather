import { TestBed } from '@angular/core/testing';
import { WeatherMockService } from '@app/shared/mocks/weather.service.mock';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WeatherService, useClass: WeatherMockService }
      ]
    })
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get city weather', () => {
    service.getCityWeatherByName('istanbul').subscribe(res => {
      expect(res).toBeTruthy();
    });
  });

  it('should get city group weather', () => {
    service.getGroupCityWeatherById('2950159,745042,524901,3067696,2759794').subscribe(res => {
      expect(res).toBeTruthy();
      expect(res.length).toBeGreaterThan(0);
    });
  });

  it('should get city weather forecast by name', () => {
    service.getCityWeatherForecastByName('istanbul').subscribe(res => {
      expect(res).toBeTruthy();
      expect(res.length).toBeGreaterThan(0);
    });
  });

  it('should get city weather forecast by id', () => {
    service.getCityWeatherForecastById('2950159').subscribe(res => {
      expect(res).toBeTruthy();
      expect(res.length).toBeGreaterThan(0);
    });
  });

});
