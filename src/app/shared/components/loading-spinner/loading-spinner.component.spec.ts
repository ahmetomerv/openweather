import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoadingSpinnerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner', fakeAsync(() => {
    component.show = true;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.spinner-container');
    expect(element).toBeTruthy();
  }));
});
