import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogBreed } from '../../services/dog-breed-service.service';
import { Observable } from 'rxjs';
import { BreedFacade } from '../../store/breed.facade';

@Component({
  selector: 'app-breed-bio',
  templateUrl: './breed-bio.component.html',
  styleUrls: ['./breed-bio.component.css']
})
export class BreedBioComponent implements OnInit {
  public breed$!: Observable<DogBreed | null>;

  constructor(
    private readonly breedFacade: BreedFacade,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const breedId = Number(params.get('id'));
      this.getDogBreedDetails(breedId);
    });
  }

  getDogBreedDetails(breedId: number): void {
    this.breed$ = this.breedFacade.fetchDogBreedDetails(breedId);
  }
}