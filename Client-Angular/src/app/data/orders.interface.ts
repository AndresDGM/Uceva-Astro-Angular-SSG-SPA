import { Order } from '../interfaces/orders.interface';

/**
 * Listado de órdenes disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos local utilizada
 * para el desarrollo y las pruebas de la vista de órdenes.
 */
export const ORDERS: Order[] = [
  {
    id: 1001,
    customerName: 'Juan Pérez',
    date: '2026-09-20',
    total: 125000,
    status: 'Pendiente',
    itemCount: 3,
  },
  {
    id: 1002,
    customerName: 'María González',
    date: '2026-09-21',
    total: 87500,
    status: 'Procesando',
    itemCount: 2,
  },
  {
    id: 1003,
    customerName: 'Carlos Rodríguez',
    date: '2026-09-22',
    total: 215000,
    status: 'Enviado',
    itemCount: 5,
  },
  {
    id: 1004,
    customerName: 'Ana Martínez',
    date: '2026-09-23',
    total: 156000,
    status: 'Entregado',
    itemCount: 4,
  },
  {
    id: 1005,
    customerName: 'Laura Gómez',
    date: '2026-09-24',
    total: 65000,
    status: 'Cancelado',
    itemCount: 1,
  },
];