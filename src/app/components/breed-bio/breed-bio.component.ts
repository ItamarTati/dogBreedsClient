import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogBreed, DogBreedServiceService } from '../../services/dog-breed-service.service';

@Component({
  selector: 'app-breed-bio',
  templateUrl: './breed-bio.component.html',
  styleUrls: ['./breed-bio.component.css']
})
export class BreedBioComponent implements OnInit {
  public loading = true;
  public breed: DogBreed | undefined;
  
  constructor(
    private readonly dogBreedServiceService: DogBreedServiceService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const breedId = Number(params.get('id'));
      this.getDogBreedDetails(breedId);
    });
  }

  getDogBreedDetails(breedId: number): void {
    this.dogBreedServiceService.getDogBreedById(breedId)
      .subscribe({
        next: (breed: DogBreed) => {
          this.breed = breed;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching dog breed details:', error);
          this.loading = false;
        }
      });
  }
}