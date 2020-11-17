import { Pipe, PipeTransform } from '@angular/core';
import Utils from '../utils';

@Pipe({
  name: 'temperatureDegree'
})
export class TemperatureDegreePipe implements PipeTransform {

  public transform(temp: any, ...args: unknown[]): string {
    if (temp) {
      temp = Utils.kelvinToCelsius(temp);
      temp = temp + 'C';
      return temp.toString().replace(/\b(\d{1,3})(?=[FC]\b)/, "$1°");
    }

    return temp;
  }

}
