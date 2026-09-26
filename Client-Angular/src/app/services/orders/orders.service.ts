import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';
import { ORDERS } from '../../data/orders.interface';

/**
 * Servicio encargado de la gestión de órdenes.
 *
 * Proporciona métodos para obtener las órdenes
 * disponibles desde la fuente de datos local.
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * Obtiene todas las órdenes disponibles.
   *
   * @returns Observable con el listado de órdenes.
   */
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}