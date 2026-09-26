import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../interfaces/orders.interface';

/**
 * Componente de tabla de órdenes.
 *
 * Se utiliza para mostrar un listado de órdenes en una tabla,
 * mostrando información como cliente, fecha, total, cantidad de
 * productos y un badge visual que indica el estado de cada orden.
 *
 * @remarks
 * Este componente recibe las órdenes desde un componente padre
 * a través del Input `orders` y utiliza el mapeo `statusMap`
 * para asignar tipos de Badge según el estado de cada orden.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un organismo dentro del sistema de diseño atómico.
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [BadgeAtom],
})
export class OrdersTableComponent {
  /**
   * Listado de órdenes que se mostrarán en la tabla.
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo de estados de órdenes a tipos de Badge.
   */
  statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Procesando': 'primary',
    'Enviado': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger',
  };
}