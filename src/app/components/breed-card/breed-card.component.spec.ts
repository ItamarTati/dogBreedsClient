import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedCardComponent } from './breed-card.component';

describe('BreedCardComponent', () => {
  let component: BreedCardComponent;
  let fixture: ComponentFixture<BreedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit breedSelected event when toggleSelection is called', () => {
    const breedId = 1;
    const breedSelectedSpy = jest.spyOn(component.breedSelected, 'emit');

    component.dogBreed = { id: breedId, name: 'Bulldog', description: 'Friendly and courageous.' };
    component.toggleSelection();

    expect(breedSelectedSpy).toHaveBeenCalledWith(breedId);
  });
});