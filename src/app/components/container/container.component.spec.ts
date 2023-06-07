import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ContainerComponent } from './container.component';
import { BreedFacade } from '../../store/breed.facade';
import { Subject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let breedFacade: BreedFacade;
  let router: Router;
  let selectedBreedIdSubject: Subject<number | null>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [BreedFacade]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    breedFacade = TestBed.inject(BreedFacade);
    router = TestBed.inject(Router);
    selectedBreedIdSubject = new Subject<number | null>();
    component.selectedBreedId$ = selectedBreedIdSubject.asObservable();
  });

  afterEach(() => {
    selectedBreedIdSubject.complete();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a breed', () => {
    const breedId = 1;

    jest.spyOn(breedFacade, 'selectBreed');

    component.toggleSelection(breedId);

    selectedBreedIdSubject.subscribe((id) => {
      expect(id).toBe(breedId);
    });

    expect(breedFacade.selectBreed).toHaveBeenCalledWith(breedId);
  });
});