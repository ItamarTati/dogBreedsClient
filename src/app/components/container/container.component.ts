import { Component, OnInit } from '@angular/core';
import { DogBreed, DogBreedServiceService } from '../../services/dog-breed-service.service';
import { BreedFacade } from '../../store/breed.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public dogBreeds$!: Observable<Array<DogBreed> | null>;
  public selectedBreedId$!: Observable<number | null>;

  constructor(private readonly breedFacade: BreedFacade) {}

  ngOnInit() {
    this.dogBreeds$ = this.breedFacade.fetchDogBreeds();
    this.selectedBreedId$ = this.breedFacade.getSelectedBreedId();
  }

  public toggleSelection(dogBreedId: number) {
    this.breedFacade.selectBreed(dogBreedId);
  }
}