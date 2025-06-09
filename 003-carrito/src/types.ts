interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen?: string;
}

interface ItemCarrito {
    producto: Producto;
    cantidad: number;
}

type TipoAccionCarrito = 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY';

type AccionCarrito =
    | { type: 'ADD_ITEM'; payload: Producto }
    | { type: 'REMOVE_ITEM'; payload: { productId: string } }
    | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } };

export type { Producto, ItemCarrito, TipoAccionCarrito, AccionCarrito };