import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DogBreedServiceService, DogBreed } from './dog-breed-service.service';

describe('DogBreedServiceService', () => {
  let service: DogBreedServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogBreedServiceService]
    });
    service = TestBed.inject(DogBreedServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve a list of dog breeds', () => {
    const mockDogBreeds: DogBreed[] = [
      { id: 1, name: 'Bulldog', description: 'Friendly and courageous breed.' },
      { id: 2, name: 'Labrador Retriever', description: 'Energetic and outgoing breed.' }
    ];
  
    service.getDogBreeds().subscribe((dogBreeds: DogBreed[]) => {
      expect(dogBreeds).toEqual(mockDogBreeds);
    });
  
    const req = httpMock.expectOne(`${service.getApiUrl()}/dog-breeds`);
    expect(req.request.method).toBe('GET');
    req.flush(mockDogBreeds);
  });
  
  it('should retrieve a dog breed by ID', () => {
    const mockDogBreed: DogBreed = { id: 1, name: 'Bulldog', description: 'Friendly and courageous breed.' };
    const breedId = 1;
  
    service.getDogBreedById(breedId).subscribe((dogBreed: DogBreed) => {
      expect(dogBreed).toEqual(mockDogBreed);
    });
  
    const req = httpMock.expectOne(`${service.getApiUrl()}/dog-breeds/${breedId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockDogBreed);
  });
});