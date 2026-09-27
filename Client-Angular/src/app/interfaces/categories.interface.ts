/**
 * Interfaz que representa una categoría de productos.
 *
 * Contiene la información básica necesaria para mostrar una categoría
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada categoría debe tener un `id` único, un `name` descriptivo,
 * una `description` breve, un `icon` de Bootstrap Icons (sin el prefijo
 * `bi-`), un `status` que indica si está activa o inactiva y un
 * `productCount` con el número de productos que pertenecen a la categoría.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Lacteos',
 *   description: 'Productos derivados de la leche',
 *   icon: 'cup-straw',
 *   status: 'Activa',
 *   productCount: 3
 * };
 * ```
 */
export interface Category {
    /** Identificador único de la categoría */
    id: number;

    /** Nombre de la categoría */
    name: string;

    /** Descripción breve de la categoría */
    description: string;

    /** Icono de Bootstrap Icons asociado a la categoría (sin el prefijo `bi-`) */
    icon: string;

    /** Estado de la categoría */
    status: CategoryStatus;

    /** Cantidad de productos que pertenecen a la categoría */
    productCount: number;
}

/**
 * Tipo de estado de una categoría.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Activa'
 * - 'Inactiva'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: CategoryStatus = 'Activa';
 * ```
 */
export type CategoryStatus = 'Activa' | 'Inactiva';