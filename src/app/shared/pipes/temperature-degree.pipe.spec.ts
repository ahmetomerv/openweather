import { inject, TestBed } from '@angular/core/testing';
import { TemperatureDegreePipe } from './temperature-degree.pipe';

describe('Pipe: TemperatureDegreePipe', () => {
  let pipe;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ TemperatureDegreePipe ]
  }));

  beforeEach(inject([TemperatureDegreePipe], p => {
    pipe = p;
  }));

  it('create an instance', () => {
    const pipe = new TemperatureDegreePipe();
    expect(pipe).toBeTruthy();
  });

  it('should work with empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should contain ° (degree) and Celsius symbols', () => {
    expect(pipe.transform(33)).toContain('C');
    expect(pipe.transform(33)).toContain('°');
  })

  it('should work with undefined/null values', () => {
    expect(pipe.transform(null)).toEqual('');
    expect(pipe.transform(undefined)).toEqual('');
  })

});
