import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  fetchDogBreeds,
  fetchDogBreedsSuccess,
  fetchDogBreedsFailure,
  fetchDogBreedDetails,
  fetchDogBreedDetailsSuccess,
  fetchDogBreedDetailsFailure,
} from './breed.actions';

import { DogBreedServiceService } from '../services/dog-breed-service.service';

@Injectable()
export class BreedEffects {
  constructor(
    private actions$: Actions,
    private breedService: DogBreedServiceService
  ) {}

  fetchDogBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchDogBreeds),
      mergeMap(() =>
        this.breedService.getDogBreeds().pipe(
          map((breeds) => fetchDogBreedsSuccess({ breeds })),
          catchError((error) => of(fetchDogBreedsFailure({ error })))
        )
      )
    )
  );

  fetchDogBreedDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchDogBreedDetails),
      mergeMap((action) =>
        this.breedService.getDogBreedById(action.breedId).pipe(
          map((breed) => fetchDogBreedDetailsSuccess({ breed })),
          catchError((error) => of(fetchDogBreedDetailsFailure({ error })))
        )
      )
    )
  );
}