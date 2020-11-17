import { Injectable } from '@angular/core';
import { EnvironmentInterface } from '@app/core/models/environment.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements EnvironmentInterface {

  constructor() {}

  get production() {
    return environment.production;
  }

  get enableDebugTools() {
    return environment.enableDebugTools;
  }

  get logLevel() {
    return environment.logLevel;
  }

  get apiUrl() {
    return environment.apiUrl;
  }

  get apiKey() {
    return environment.apiKey;
  }

}