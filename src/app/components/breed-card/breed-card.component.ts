import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DogBreed } from '../../services/dog-breed-service.service';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent {
  @Input() dogBreed: DogBreed;
  @Input() isSelected: boolean = false;
  @Output() breedSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.dogBreed = {} as DogBreed;
  }

  toggleSelection() {
    this.breedSelected.emit(this.dogBreed.id);
  }
}