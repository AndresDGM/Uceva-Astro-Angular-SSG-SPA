import { TestBed } from '@angular/core/testing';
import { ReviewsService } from './reviews.service';
import { REVIEWS } from '../../data/reviews.interface';

describe('ReviewsService', () => {
  let service: ReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllReviews debería retornar un observable con las reseñas', (done) => {
      service.getAllReviews().subscribe(reviews => {
        expect(reviews).toEqual(REVIEWS);
        expect(reviews.length).toBe(REVIEWS.length);
        done();
      });
    });

  });

});
