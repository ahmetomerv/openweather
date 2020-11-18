import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WeatherService } from '@app/core/services/weather.service';
import { WeatherListComponent } from '@app/shared/components/weather-list/weather-list.component';
import { WeatherMockService } from '@app/shared/mocks/weather.service.mock';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      providers: [
        { provide: WeatherService, useClass: WeatherMockService }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(WeatherComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a city weather forecast item', () => {
    expect(component.currentCityForecast).toBeTruthy();
  });

  it('should render app-weather-list component', () => {
    let weatherListComponentFixture: ComponentFixture<WeatherListComponent> = TestBed.createComponent(WeatherListComponent);
    let weatherListComponent: WeatherListComponent = weatherListComponentFixture.componentInstance;
    expect(weatherListComponent).toBeTruthy();
  });

});
