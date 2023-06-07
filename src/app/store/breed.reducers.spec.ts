import { breedReducer, initialState } from './breed.reducer';
import {
  selectBreed,
  fetchDogBreeds,
  fetchDogBreedsSuccess,
  fetchDogBreedsFailure,
  fetchDogBreedDetails,
  fetchDogBreedDetailsSuccess,
  fetchDogBreedDetailsFailure,
} from './breed.actions';

import { DogBreed } from '../services/dog-breed-service.service';

describe('breedReducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = breedReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle selectBreed', () => {
    const breedId = 1;
    const action = selectBreed({ breedId });
    const state = breedReducer(initialState, action);

    expect(state.selectedBreedId).toBe(breedId);

    // Toggle the selected breed
    const toggledAction = selectBreed({ breedId });
    const toggledState = breedReducer(state, toggledAction);

    expect(toggledState.selectedBreedId).toBeNull();
  });

  it('should handle fetchDogBreeds', () => {
    const action = fetchDogBreeds();
    const state = breedReducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchDogBreedsSuccess', () => {
    const breeds: DogBreed[] = [
      { id: 1, name: 'Breed 1', description: 'Description 1' },
      { id: 2, name: 'Breed 2', description: 'Description 2' },
    ];
    const action = fetchDogBreedsSuccess({ breeds });
    const state = breedReducer(initialState, action);

    expect(state.dogBreeds).toBe(breeds);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should handle fetchDogBreedsFailure', () => {
    const error = 'Failed to fetch dog breeds';
    const action = fetchDogBreedsFailure({ error });
    const state = breedReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle fetchDogBreedDetails', () => {
    const breedId = 1;
    const action = fetchDogBreedDetails({ breedId });
    const state = breedReducer(initialState, action);
  
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchDogBreedDetailsSuccess', () => {
    const breed: DogBreed = { id: 1, name: 'Breed 1', description: 'Description 1' };
    const action = fetchDogBreedDetailsSuccess({ breed });
    const state = breedReducer(initialState, action);

    expect(state.selectedBreed).toBe(breed);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should handle fetchDogBreedDetailsFailure', () => {
    const error = 'Failed to fetch dog breed details';
    const action = fetchDogBreedDetailsFailure({ error });
    const state = breedReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
  });
});




