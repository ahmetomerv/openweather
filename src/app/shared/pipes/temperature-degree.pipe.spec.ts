import { TemperatureDegreePipe } from './temperature-degree.pipe';

describe('DegreePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureDegreePipe();
    expect(pipe).toBeTruthy();
  });
});
