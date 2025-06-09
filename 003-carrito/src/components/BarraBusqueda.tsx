import React, { useEffect, useState } from 'react'

interface BarraBusquedaProps {
  onSearchChange: (searchTerm: string) => void;
}

const BarraBusqueda = ({ onSearchChange }: BarraBusquedaProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearchChange(searchTerm);
  }, [searchTerm, onSearchChange]);

  return (
    <input type="text" placeholder="Buscar producto" onChange={(e) => setSearchTerm(e.target.value)} />
  )
}

export default BarraBusqueda