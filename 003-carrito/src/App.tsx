import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { cartReducer, initialState } from './reducers/cartReducer'
import ListaProducto from './components/ListaProducto'
import type { Producto } from './types'
import CarritoCompras from './components/CarritoCompras'
import BarraBusqueda from './components/BarraBusqueda'
function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const productos = [
    { id: 1, nombre: 'Arroz', precio: 100, descripcion: 'Arroz blanco 99%' },
    { id: 2, nombre: 'Pollo', precio: 200, descripcion: 'Pechuga de pollo' },
    { id: 3, nombre: 'Pescado', precio: 300, descripcion: 'Tilapia' },
    { id: 4, nombre: 'Carne', precio: 400, descripcion: 'Carne de res' },
  ]

  const handleSearchChange = (term: string) =>
    setSearchTerm(term);

  const filteredProducts = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onAddToCart = (producto: Producto) => {
    dispatch({ type: 'ADD_ITEM', payload: producto });
  }

  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cartState));
  }, [cartState]);

  return (
    <>
      <h1>Supermercado</h1>
      <BarraBusqueda onSearchChange={handleSearchChange} />
      <CarritoCompras items={cartState} dispatch={dispatch} />
      <ListaProducto productos={filteredProducts} onAddToCart={onAddToCart} />
    </>
  )
}

export default App
