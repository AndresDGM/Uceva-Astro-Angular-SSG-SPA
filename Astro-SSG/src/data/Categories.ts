import type { Category } from "@interfaces/Categories";

/**
 * Listado de categorías disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de categorías de productos, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Category[]}
 */
export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Lacteos',
    description: 'Productos derivados de la leche',
    icon: 'cup-straw',
    status: 'Activa',
    productCount: 3
  },
  {
    id: 2,
    name: 'Carnes',
    description: 'Carnes rojas, blancas y derivados',
    icon: 'egg-fried',
    status: 'Activa',
    productCount: 3
  },
  {
    id: 3,
    name: 'Frutas',
    description: 'Frutas frescas de temporada',
    icon: 'apple',
    status: 'Activa',
    productCount: 2
  },
  {
    id: 4,
    name: 'Verduras',
    description: 'Hortalizas y verduras frescas',
    icon: 'flower1',
    status: 'Inactiva',
    productCount: 2
  },
  {
    id: 5,
    name: 'Bebidas',
    description: 'Bebidas gaseosas, jugos y agua',
    icon: 'cup',
    status: 'Activa',
    productCount: 4
  },
  {
    id: 6,
    name: 'Panaderia',
    description: 'Pan, galletas y reposteria',
    icon: 'cake',
    status: 'Inactiva',
    productCount: 5
  },
  {
    id: 7,
    name: 'Aseo',
    description: 'Productos de limpieza del hogar',
    icon: 'basket',
    status: 'Activa',
    productCount: 2
  },
  {
    id: 8,
    name: 'Granos',
    description: 'Arroz, frijol, lentejas y mas',
    icon: 'box-seam',
    status: 'Activa',
    productCount: 6
  }
];