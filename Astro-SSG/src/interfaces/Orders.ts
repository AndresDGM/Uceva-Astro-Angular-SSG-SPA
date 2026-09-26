/**
 * Interfaz que representa una orden de compra.
 *
 * Contiene la información básica necesaria para mostrar una orden
 * en la tabla de órdenes.
 */
export interface Order {
    /** Identificador único de la orden */
    id: number;

    /** Nombre del cliente asociado a la orden */
    customerName: string;

    /** Fecha en la que se realizó la orden */
    date: string;

    /** Valor total de la orden */
    total: number;

    /** Estado actual de la orden */
    status: OrderStatus;

    /** Cantidad de productos incluidos en la orden */
    itemCount: number;
}

/**
 * Tipo de estado de una orden.
 *
 * Se utiliza para restringir los estados disponibles
 * y posteriormente mapearlos a los badges de la interfaz.
 */
export type OrderStatus =
    | 'Pendiente'
    | 'Procesando'
    | 'Enviado'
    | 'Entregado'
    | 'Cancelado';