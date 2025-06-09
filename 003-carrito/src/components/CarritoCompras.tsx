import React, { type Dispatch } from 'react'
import type { AccionCarrito, ItemCarrito } from '../types'

interface CarritoComprasProps {
  items: ItemCarrito[],
  dispatch: Dispatch<AccionCarrito>
}

const CarritoCompras = ({ items, dispatch }: CarritoComprasProps) => {
  const total = items.reduce((sum, item) => sum + (item.producto.precio * item.cantidad), 0)

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.producto.id}>
                  <td>{item.producto.nombre}</td>
                  <td>
                    <button onClick={() => dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { productId: String(item.producto.id), quantity: item.cantidad - 1 }
                    })}>-</button>
                    {item.cantidad}
                    <button onClick={() => dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { productId: String(item.producto.id), quantity: item.cantidad + 1 }
                    })}>+</button>
                  </td>
                  <td>₡{item.producto.precio}</td>
                  <td>₡{item.producto.precio * item.cantidad}</td>
                  <td>
                    <button onClick={() => dispatch({
                      type: 'REMOVE_ITEM',
                      payload: { productId: String(item.producto.id) }
                    })}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
              <h3>Total: ₡{total}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default CarritoCompras