import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ContainerComponent } from './container.component';
import { DogBreedServiceService, DogBreed } from '../../services/dog-breed-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let dogBreedService: DogBreedServiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [DogBreedServiceService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    dogBreedService = TestBed.inject(DogBreedServiceService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch dog breeds', () => {
    const dogBreeds: DogBreed[] = [
      { id: 1, name: 'Bulldog', description: 'Friendly and courageous.' },
      { id: 2, name: 'Labrador Retriever', description: 'Intelligent and gentle.' },
      { id: 3, name: 'German Shepherd', description: 'Loyal and protective.' }
    ];

    jest.spyOn(dogBreedService, 'getDogBreeds').mockReturnValue(of(dogBreeds));

    component.ngOnInit();

    expect(dogBreedService.getDogBreeds).toHaveBeenCalled();
    expect(component.dogBreeds).toEqual(dogBreeds);
  });

  it('should select a breed', () => {
    const breedId = 1;

    jest.spyOn(router, 'navigate');

    component.selectBreed(breedId);

    expect(component.selectedBreedId).toBe(breedId);
    expect(router.navigate).toHaveBeenCalledWith(['/dog-breeds', breedId]);
  });

  it('should deselect a breed', () => {
    component.selectedBreedId = 1;

    jest.spyOn(router, 'navigate');

    component.selectBreed(1);

    expect(component.selectedBreedId).toBeNull();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});