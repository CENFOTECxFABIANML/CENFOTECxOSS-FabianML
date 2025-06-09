import type { Producto } from '../types'
import TarjetaProducto from './TarjetaProducto'

interface ListaProductoProps {
  productos: Producto[]
  onAddToCart: (producto: Producto) => void
}

const ListaProducto = ({ productos, onAddToCart }: ListaProductoProps) => {
  return (
    <div>
      <h2>Lista Productos:</h2>
      {productos.map((producto) => (
        <div key={producto.id}>
          <TarjetaProducto producto={producto} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  )
}

export default ListaProducto