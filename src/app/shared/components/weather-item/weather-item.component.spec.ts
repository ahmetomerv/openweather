import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { WeatherService } from '@app/core/services/weather.service';
import { WeatherMockService, cityWeather } from '@app/shared/mocks/weather.service.mock';
import { TemperatureDegreePipe } from '@app/shared/pipes/temperature-degree.pipe';

import { WeatherItemComponent } from './weather-item.component';

describe('WeatherItemComponent', () => {
  let component: WeatherItemComponent;
  let fixture: ComponentFixture<WeatherItemComponent>;
  let pipeSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherItemComponent, TemperatureDegreePipe ],
      providers: [
        { provide: WeatherService, useClass: WeatherMockService }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(WeatherItemComponent);
      component = fixture.componentInstance;
      component.item = cityWeather;
      pipeSpy = spyOn(TemperatureDegreePipe.prototype, 'transform');
      fixture.detectChanges();
    })
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a city weather item', () => {
    expect(component.item).toBeTruthy();
  });

  it('should call itemClickHandler and append weather-item-selected class', fakeAsync(() => {
    spyOn(component, 'itemClickHandler');
    let listItem = fixture.debugElement.nativeElement.querySelector('.weather-item-container');
    listItem.click();
    tick();
    expect(component.itemClickHandler).toHaveBeenCalled();
    expect(listItem.classList).toContain('weather-item-selected');
  }));

  it('should render city weather data and call TemperatureDegreePipe', () => {
    let itemCell = fixture.debugElement.nativeElement.querySelector('.weather-item-container');
    expect(pipeSpy).toHaveBeenCalled();
    expect(itemCell.innerText.toLowerCase()).toContain(component.item.name.toLowerCase());
    expect(itemCell.innerText.toLowerCase()).toContain(component.item.wind.speed);
  });

});
