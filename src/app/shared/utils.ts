export default class Utils {

  static kelvinToCelsius(temp: any): number {
    if (temp) {
      temp = Math.floor(temp);
      return temp - 273;
    }
    
    return temp;
  }
}
