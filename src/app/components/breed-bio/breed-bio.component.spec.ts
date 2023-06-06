import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedBioComponent } from './breed-bio.component';
import { DogBreedServiceService, DogBreed } from '../../services/dog-breed-service.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('BreedBioComponent', () => {
  let component: BreedBioComponent;
  let fixture: ComponentFixture<BreedBioComponent>;
  let dogBreedService: DogBreedServiceService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedBioComponent],
      imports: [HttpClientModule], 
      providers: [
        DogBreedServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'id') {
                  return '1';
                }
                return null;
              }
            })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedBioComponent);
    component = fixture.componentInstance;
    dogBreedService = TestBed.inject(DogBreedServiceService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should display breed information when breedId is provided', () => {
    const breedId = 1;
    const breed: DogBreed = { id: breedId, name: 'Golden Retriever', description: 'Friendly and intelligent breed' };
  
    jest.spyOn(dogBreedService, 'getDogBreedById').mockReturnValue(of(breed));
  
    fixture.detectChanges();
  
    expect(component.loading).toBeFalsy();
    expect(component.breed).toEqual(breed);
  
    const breedInfoElement = fixture.nativeElement.querySelector('.breed-bio');
    expect(breedInfoElement).toBeTruthy();
    expect(breedInfoElement.textContent).toContain(breed.name);
    expect(breedInfoElement.textContent).toContain(breed.description);
  });
  
  it('should display a loading spinner when breedId is not provided', () => {
    jest.spyOn(dogBreedService, 'getDogBreedById').mockReturnValue(of());
  
    fixture.detectChanges();
  
    expect(component.loading).toBeTruthy();
    expect(component.breed).toBeUndefined();
  
    const loadingSpinnerElement = fixture.nativeElement.querySelector('.loading-spinner');
    expect(loadingSpinnerElement).toBeTruthy();
  
    const breedInfoElement = fixture.nativeElement.querySelector('.breed-bio');
    expect(breedInfoElement).toBeFalsy();
  });
});