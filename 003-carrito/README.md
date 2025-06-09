## Como ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/CENFOTECxFABIANML/CENFOTECxOSS-FabianML.git
   cd CENFOTECxOSS-FabianML
   cd 002-carrito
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Corre la aplicación:
   ```bash
   npm run dev
   ```

## Funcionalidades

- **Ver productos**: Listado completo de productos con nombre, precio y descripción.
- **Añadir productos**: Botón para agregar cualquier producto al carrito.
- **Gestionar carrito**: 
  - Gestionar cantidad de ítems.
  - Eliminar ítems del carrito.
  - Calcular subtotales y total automáticamente.
- **Buscar productos**: Barra de búsqueda para filtrar productos por nombre.
- **Persistencia**: El carrito se guarda aunque cierres el navegador (usa `localStorage`).

## Hooks

### `useState`
- **Para qué**: Gestionar estados simples de la UI.
- **Dónde lo usé**:
  - En la barra de búsqueda (`BarraBusqueda.tsx`) para controlar el texto que escribe el usuario.
  - En `App.tsx` para manejar el término de búsqueda (`searchTerm`) y filtrar los productos.

### `useReducer`
- **Para qué**: Manejar el estado complejo del carrito (añadir, quitar, actualizar cantidades).
- **Dónde lo usé**:
  - En `App.tsx` para gestionar todo el estado del carrito (`cartState`).
  - El reducer (`cartReducer.ts`) tiene acciones para:
    - `ADD_ITEM`: Añade un producto o aumenta su cantidad.
    - `REMOVE_ITEM`: Elimina un producto del carrito.
    - `UPDATE_QUANTITY`: Cambia la cantidad de un producto (si llega a 0, lo elimina).

### `useEffect`
- **Para qué**: Sincronizar el carrito con el almacenamiento local (`localStorage`).
- **Dónde lo usé**:
  - En `App.tsx` para guardar el carrito en `localStorage` cada vez que cambia (`cartState`).
  - También al cargar la app: verifica si hay un carrito guardado y lo usa como estado inicial.

