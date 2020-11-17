import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loadingMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }

  public setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }

    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
    } else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    
    if (this.loadingMap.size === 0) {
      this.loadingSub.next(false);
    }
  }
}
