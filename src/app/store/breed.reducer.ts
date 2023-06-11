import { createReducer, on } from '@ngrx/store';
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

export interface BreedState {
    selectedBreedId: number | null;
    dogBreeds: Array<DogBreed> | null;
    selectedBreed: DogBreed | null;
    error: any | null;
    loading: boolean;
}

export const initialState: BreedState = {
    selectedBreedId: null,
    dogBreeds: null,
    selectedBreed: null,
    error: null,
    loading: false,
};

export const breedReducer = createReducer(
    initialState,
    on(selectBreed, (state, { breedId }) => ({
        ...state,
        selectedBreedId: breedId,
    })),
    on(fetchDogBreeds, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(fetchDogBreedsSuccess, (state, { breeds }) => ({
        ...state,
        dogBreeds: breeds,
        loading: false,
        error: null,
    })),
    on(fetchDogBreedsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(fetchDogBreedDetails, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(fetchDogBreedDetailsSuccess, (state, { breed }) => ({
        ...state,
        selectedBreed: breed,
        loading: false,
        error: null,
    })),
    on(fetchDogBreedDetailsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
