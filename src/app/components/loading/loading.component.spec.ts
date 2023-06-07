import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoadingComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the loading spinner', () => {
    const loadingSpinnerElement = fixture.nativeElement.querySelector('.loading-spinner');
    expect(loadingSpinnerElement).toBeTruthy();

    const spinnerElement = loadingSpinnerElement.querySelector('.spinner');
    expect(spinnerElement).toBeTruthy();
  });
});