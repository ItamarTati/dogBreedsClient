import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBreed, fetchDogBreeds, fetchDogBreedDetails } from './breed.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectedBreedId, dogBreeds, selectedBreed } from './breed.selectors';
import { DogBreed } from '../services/dog-breed-service.service';


@Injectable({
    providedIn: 'root',
  })
  export class BreedFacade {
    constructor(private store: Store, private router: Router) {}
  
    selectBreed(breedId: number): void {
      this.store.dispatch(selectBreed({ breedId }));
      this.router.navigate(['/dog-breeds', breedId]);
    }
  
    getSelectedBreedId(): Observable<number | null> {
      return this.store.select(selectedBreedId);
    }
  
    fetchDogBreeds(): Observable<Array<DogBreed> | null> {
      this.store.dispatch(fetchDogBreeds()); 
      return this.store.select(dogBreeds); 
    }
  
    fetchDogBreedDetails(breedId: number): Observable<DogBreed | null> {
      this.store.dispatch(fetchDogBreedDetails({ breedId }));
      return this.store.select(selectedBreed); 
    }
  }