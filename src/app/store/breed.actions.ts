import { createAction, props } from '@ngrx/store';
import {DogBreed} from '../services/dog-breed-service.service'

export const selectBreed = createAction('[Breed] Select Breed', props<{ breedId: number }>());

export const fetchDogBreeds = createAction('[Breed] Fetch Dog Breeds');
export const fetchDogBreedsSuccess = createAction(
  '[Breed] Fetch Dog Breeds Success',
  props<{ breeds: DogBreed[] }>()
);
export const fetchDogBreedsFailure = createAction(
  '[Breed] Fetch Dog Breeds Failure',
  props<{ error: any }>()
);

export const fetchDogBreedDetails = createAction(
  '[Breed] Fetch Dog Breed Details',
  props<{ breedId: number }>()
);
export const fetchDogBreedDetailsSuccess = createAction(
  '[Breed] Fetch Dog Breed Details Success',
  props<{ breed: DogBreed }>()
);
export const fetchDogBreedDetailsFailure = createAction(
  '[Breed] Fetch Dog Breed Details Failure',
  props<{ error: any }>()
);
