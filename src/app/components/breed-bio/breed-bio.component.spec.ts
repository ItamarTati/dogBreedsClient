import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedBioComponent } from './breed-bio.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DogBreed } from '../../services/dog-breed-service.service';
import { BreedFacade } from '../../store/breed.facade';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';

describe('BreedBioComponent', () => {
  let component: BreedBioComponent;
  let fixture: ComponentFixture<BreedBioComponent>;
  let breedFacade: BreedFacade;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedBioComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [
        BreedFacade,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'id') {
                  return '1';
                }
                return null;
              },
            }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedBioComponent);
    component = fixture.componentInstance;
    breedFacade = TestBed.inject(BreedFacade);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display breed information when breedId is provided', async () => {
    const breedId = 1;
    const breed: DogBreed = { id: breedId, name: 'Golden Retriever', description: 'Friendly and intelligent breed' };

    jest.spyOn(breedFacade, 'fetchDogBreedDetails').mockReturnValue(of(breed));

    fixture.detectChanges();

    await fixture.whenStable();

    expect(await component.breed$.toPromise()).toEqual(breed);

    const breedInfoElement = fixture.nativeElement.querySelector('.breed-bio');
    expect(breedInfoElement).toBeTruthy();
    expect(breedInfoElement.textContent).toContain(breed.name);
    expect(breedInfoElement.textContent).toContain(breed.description);
  });

  it('should display a loading spinner when breedId is not provided', async () => {
    jest.spyOn(breedFacade, 'fetchDogBreedDetails').mockReturnValue(of(null));

    fixture.detectChanges();

    await fixture.whenStable();

    expect(await component.breed$.toPromise()).toEqual(null);

    const loadingSpinnerElement = fixture.nativeElement.querySelector('app-loading');
    expect(loadingSpinnerElement).toBeTruthy();

    const breedInfoElement = fixture.nativeElement.querySelector('.breed-bio');
    expect(breedInfoElement).toBeFalsy();
  });
});