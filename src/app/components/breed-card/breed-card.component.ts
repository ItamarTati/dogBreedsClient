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
  constructor() {
    this.dogBreed = {} as DogBreed;
  }
}

