import { Category } from "../interfaces/categories.interface";

export const CATEGORIES_MOCK: Category[] = [
    {
        id: 1,
        name: 'Lacteos',
        description: 'Productos derivados de la leche',
        icon: 'cup-straw',
        status: 'Activa',
        productCount: 3,
    },
    {
        id: 2,
        name: 'Bebidas',
        description: 'Bebidas gaseosas, jugos y agua',
        icon: 'cup',
        status: 'Inactiva',
        productCount: 4,
    }
];