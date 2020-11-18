import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '@app/core/services/weather.service';
import { WeatherMockService } from '@app/shared/mocks/weather.service.mock';

import { WeatherListComponent } from './weather-list.component';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherListComponent ],
      providers: [
        { provide: WeatherService, useClass: WeatherMockService }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(WeatherListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one city weather item', () => {
    expect(component.cityWeatherList.length).toBeGreaterThan(0);
  });

  it('should have default city group id list', () => {
    expect(component.cityIdGroup).toBeTruthy();
  });

  it('should render the weather header', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.weather-list-header');
    expect(element.innerText.toLowerCase()).toContain('weather');
  });

});
