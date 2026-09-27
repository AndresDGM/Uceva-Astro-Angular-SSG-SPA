import { Component, inject } from '@angular/core';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { Order } from '../../interfaces/orders.interface';
import { OrdersService } from '../../services/orders/orders.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de órdenes.
 *
 * Se utiliza para gestionar y mostrar un listado de órdenes
 * utilizando el componente `OrdersTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `OrdersService`
 * para obtener las órdenes y pasarlas al componente de tabla.
 */
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  imports: [OrdersTableComponent, AlertComponent],
})
export class OrdersPage {
  orders: Order[] = [];

  state: State = 'init';

  private ordersService = inject(OrdersService);

  ngOnInit(): void {
    this.state = 'loading';

    this.ordersService.getAllOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}