import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review } from '../../interfaces/reviews.interface';
import { REVIEWS } from '../../data/reviews.interface';

/**
 * Servicio encargado de la gestión de reseñas.
 *
 * Proporciona métodos para obtener información de reseñas
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private reviewsService: ReviewsService) {}
 *
 * this.reviewsService.getAllReviews().subscribe(reviews => {
 *   console.log(reviews);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  /**
   * Obtiene una lista de reseñas desde la data local.
   *
   * @returns Observable que emite un array de reseñas.
   *
   * @example
   * ```ts
   * this.reviewsService.getAllReviews().subscribe(reviews => {
   *   console.log(reviews);
   * });
   * ```
   */
  getAllReviews(): Observable<Review[]> {
    return of(REVIEWS);
  }
}
