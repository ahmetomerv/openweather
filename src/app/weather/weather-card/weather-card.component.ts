import { Component, Input, OnInit } from '@angular/core';
import { WeatherForecastInterface } from '../models/weather-forecast.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  public cityImgUrl: any = {
    berlin: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    amsterdam: 'https://images.unsplash.com/photo-1499241142330-28701ea87ff4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
    istanbul: 'https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    moscow: 'https://images.unsplash.com/photo-1557728834-7fa63a44489a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
    london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    prague: 'https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
  }

  @Input()
  public forecast: WeatherForecastInterface[];

  constructor() { }

  ngOnInit(): void { }

  public getCityImgUrl(city: string): string {
    city = city || this.cityImgUrl[Object.keys(this.cityImgUrl)[0]];

    if (city) {
      city = city.toLowerCase();
      return `url(${this.cityImgUrl[city]})`
    }

    return '';
  }

}
