import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreedState } from './breed.reducer';

export const breedState = createFeatureSelector<BreedState>('breed');

export const selectedBreedId = createSelector(
    breedState,
    (state: BreedState) => state.selectedBreedId
);

export const dogBreeds = createSelector(
    breedState,
    (state: BreedState) => state.dogBreeds
);

export const selectedBreed = createSelector(
    breedState,
    (state: BreedState) => state.selectedBreed
);

export const loading = createSelector(
    breedState,
    (state: BreedState) => state.loading
);

export const error = createSelector(
    breedState,
    (state: BreedState) => state.error
);