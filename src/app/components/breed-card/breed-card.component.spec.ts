import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedCardComponent } from './breed-card.component';

describe('BreedCardComponent', () => {
  let component: BreedCardComponent;
  let fixture: ComponentFixture<BreedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedCardComponent]
    });
    fixture = TestBed.createComponent(BreedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
