import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DogBreed {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogBreedServiceService {
  private apiUrl = 'https://wild-red-hippopotamus-hose.cyclic.app';

  constructor(private readonly http: HttpClient) {}

  getApiUrl(): string {
    return this.apiUrl;
  }

  getDogBreeds(): Observable<DogBreed[]> {
    return this.http.get<DogBreed[]>(`${this.apiUrl}/dog-breeds`);
  }

  getDogBreedById(id: number): Observable<DogBreed> {
    return this.http.get<DogBreed>(`${this.apiUrl}/dog-breeds/${id}`);
  }
}