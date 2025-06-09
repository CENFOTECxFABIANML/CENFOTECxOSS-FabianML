import type { Producto } from '../types'

interface TarjetaProductoProps {
  producto: Producto
  onAddToCart: (producto: Producto) => void
}

const TarjetaProducto = ({ producto, onAddToCart }: TarjetaProductoProps) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>₡{producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => onAddToCart(producto)}>Añadir al Carrito</button>
    </div>
  )
}

export default TarjetaProducto