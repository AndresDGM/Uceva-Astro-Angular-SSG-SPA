import { Review } from "../interfaces/reviews.interface";

/**
 * Listado de reseñas del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Review[]}
 */
export const REVIEWS: Review[] = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    rating: 4.5,
    comment: 'Excelente producto, superó mis expectativas.',
    date: new Date('2024-02-15T18:30:00.000Z')
  },
  {
    id: 2,
    productId: 2,
    userId: 2,
    rating: 3,
    comment: 'Buen producto, aunque la entrega tardó más de lo esperado.',
    date: new Date('2024-02-16T10:15:00.000Z')
  },
  {
    id: 3,
    productId: 3,
    userId: 3,
    rating: 5,
    comment: 'Pechuga de muy buena calidad, fresca y bien empacada.',
    date: new Date('2024-02-17T14:20:00.000Z')
  },
  {
    id: 4,
    productId: 4,
    userId: 4,
    rating: 4,
    comment: 'Buena carne molida, con poca grasa.',
    date: new Date('2024-02-18T09:00:00.000Z')
  },
  {
    id: 5,
    productId: 5,
    userId: 5,
    rating: 4.5,
    comment: 'Manzanas frescas, crujientes y dulces.',
    date: new Date('2024-02-19T11:45:00.000Z')
  },
  {
    id: 6,
    productId: 6,
    userId: 6,
    rating: 5,
    comment: 'Bananos en el punto de maduración perfecto.',
    date: new Date('2024-02-20T16:10:00.000Z')
  },
  {
    id: 7,
    productId: 7,
    userId: 7,
    rating: 3.5,
    comment: 'Tomates frescos, aunque algunos llegaron un poco verdes.',
    date: new Date('2024-02-21T08:30:00.000Z')
  },
  {
    id: 8,
    productId: 8,
    userId: 8,
    rating: 4,
    comment: 'Buena cebolla cabezona, buen tamaño y calidad.',
    date: new Date('2024-02-22T13:50:00.000Z')
  },
  {
    id: 9,
    productId: 9,
    userId: 9,
    rating: 4.5,
    comment: 'Yogurt delicioso y con buena textura.',
    date: new Date('2024-02-23T17:25:00.000Z')
  },
  {
    id: 10,
    productId: 10,
    userId: 10,
    rating: 5,
    comment: 'Pernil de cerdo de excelente corte y frescura.',
    date: new Date('2024-02-24T19:00:00.000Z')
  }
];
