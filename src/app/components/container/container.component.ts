import { Component, OnInit } from '@angular/core';
import { DogBreed, DogBreedServiceService } from '../../services/dog-breed-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  dogBreeds: DogBreed[] = [];
  selectedBreedId: number | null = null;

  constructor(private readonly dogBreedServiceService: DogBreedServiceService, private router: Router) {}

  ngOnInit() {
    this.getDogBreeds();
  }

  selectBreed(breedId: number) {
    if (this.selectedBreedId === breedId) {
      this.selectedBreedId = null;
    } else {
      this.selectedBreedId = breedId;
      this.router.navigate(['/dog-breeds', breedId]);
    }
  }

  getDogBreeds() {
    this.dogBreedServiceService.getDogBreeds().subscribe({
      next: (breeds: Array<DogBreed>) => {
        this.dogBreeds = breeds;
      },
      error: (error) => {
        console.error('Failed to fetch dog breeds:', error);
      }
    })};
}