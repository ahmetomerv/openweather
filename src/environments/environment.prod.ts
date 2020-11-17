import { EnvironmentInterface } from '@app/core/models/environment.model';

export const environment: EnvironmentInterface = {
  production: true,
  enableDebugTools: true,
  logLevel: 'debug',
  apiUrl: 'https://api.openweathermap.org/data/2.5',
  apiKey: '32af193913a600d53f448a55b26960e6',
};
