import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  private isLoadingSub: Subscription;

  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  ngOnDestroy(): void {
    this.isLoadingSub.unsubscribe();
  }

  private listenToLoading(): void {
    this.isLoadingSub = this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {
        this.isLoading = loading;
      });
  }
  

}
