import { type AccionCarrito, type ItemCarrito } from "../types";

const initialState: ItemCarrito[] = JSON.parse(localStorage.getItem('cartState') || '[]');

const cartReducer = (state: ItemCarrito[], action: AccionCarrito): ItemCarrito[] => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find(item => item.producto.id === action.payload.id);

      if (existingItem) {
        return state.map(item =>
          item.producto.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...state, { producto: action.payload, cantidad: 1 }];
    }

    case 'REMOVE_ITEM': {
      return state.filter(item => item.producto.id !== Number(action.payload.productId));
    }

    case 'UPDATE_QUANTITY': {
      const updatedState = state.map(item =>
        item.producto.id === Number(action.payload.productId)
          ? { ...item, cantidad: action.payload.quantity }
          : item
      );

      return updatedState.filter(item => item.cantidad > 0);
    }

    default:
      return state;
  }
};

export { cartReducer, initialState };
