import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { EnvironmentService } from '@env/environment.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient
      .get(`${this.environmentService.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .put(`${this.environmentService.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .post(`${this.environmentService.apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient
      .delete(`${this.environmentService.apiUrl}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
