export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface EnvironmentInterface {
  production: boolean;
  enableDebugTools: boolean;
  logLevel: LogLevel;
  apiUrl: string;
  apiKey: string;
}
