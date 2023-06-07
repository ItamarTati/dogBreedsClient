import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BreedEffects } from './breed.effects';
import {
  fetchDogBreeds,
  fetchDogBreedsSuccess,
  fetchDogBreedsFailure,
  fetchDogBreedDetails,
  fetchDogBreedDetailsSuccess,
  fetchDogBreedDetailsFailure,
} from './breed.actions';
import { DogBreedServiceService } from '../services/dog-breed-service.service';

describe('BreedEffects', () => {
  let actions$: Observable<Action>;
  let effects: BreedEffects;
  let breedService: DogBreedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BreedEffects,
        DogBreedServiceService,
        provideMockActions(() => actions$),
        { provide: Observable, useValue: of({}) },
      ],
    });

    actions$ = TestBed.inject<Observable<Action>>(Observable);
    effects = TestBed.inject<BreedEffects>(BreedEffects);
    breedService = TestBed.inject<DogBreedServiceService>(DogBreedServiceService);
  });

  it('should dispatch fetchDogBreedsSuccess action on successful fetchDogBreeds', () => {
    const breeds = [
      { id: 1, name: 'Breed 1', description: 'Description 1' },
      { id: 2, name: 'Breed 2', description: 'Description 2' },
    ];

    jest.spyOn(breedService, 'getDogBreeds').mockReturnValue(of(breeds));

    actions$ = of(fetchDogBreeds());

    effects.fetchDogBreeds$.subscribe((result) => {
      expect(result).toEqual(fetchDogBreedsSuccess({ breeds }));
    });
  });

  it('should dispatch fetchDogBreedsFailure action on failed fetchDogBreeds', () => {
    const error = 'Failed to fetch dog breeds';

    jest.spyOn(breedService, 'getDogBreeds').mockReturnValue(
      throwError(new Error(error))
    );

    actions$ = of(fetchDogBreeds());

    effects.fetchDogBreeds$.subscribe((result) => {
      expect(result).toEqual(fetchDogBreedsFailure({ error }));
    });
  });

  it('should dispatch fetchDogBreedDetailsSuccess action on successful fetchDogBreedDetails', () => {
    const breedId = 1;
    const breed = { id: breedId, name: 'Breed 1', description: 'Description 1' };

    jest.spyOn(breedService, 'getDogBreedById').mockReturnValue(of(breed));

    actions$ = of(fetchDogBreedDetails({ breedId }));

    effects.fetchDogBreedDetails$.subscribe((result) => {
      expect(result).toEqual(fetchDogBreedDetailsSuccess({ breed }));
    });
  });

  it('should dispatch fetchDogBreedDetailsFailure action on failed fetchDogBreedDetails', () => {
    const breedId = 1;
    const error = 'Failed to fetch dog breed details';

    jest.spyOn(breedService, 'getDogBreedById').mockReturnValue(
      throwError(new Error(error))
    );

    actions$ = of(fetchDogBreedDetails({ breedId }));

    effects.fetchDogBreedDetails$.subscribe((result) => {
      expect(result).toEqual(fetchDogBreedDetailsFailure({ error }));
    });
  });
});