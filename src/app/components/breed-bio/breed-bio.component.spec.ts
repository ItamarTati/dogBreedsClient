import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedBioComponent } from './breed-bio.component';

describe('BreedBioComponent', () => {
  let component: BreedBioComponent;
  let fixture: ComponentFixture<BreedBioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedBioComponent]
    });
    fixture = TestBed.createComponent(BreedBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
