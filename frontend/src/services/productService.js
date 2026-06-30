import axios from "axios";

// URL base de la API del backend
const API =
  "https://conectacomercio-public.onrender.com/api";

/**
 * Obtener productos
 */
export const obtenerProductos =
() => axios.get(API);

/**
 * Crear producto
 */
export const crearProducto =
(datos) =>
axios.post(
  API,
  datos
);

/**
 * Actualizar producto
 */
export const actualizarProducto =
(id, datos) =>
axios.put(
  `${API}/${id}`,
  datos
);

/**
 * Eliminar producto
 */
export const eliminarProducto =
(id) =>
axios.delete(
  `${API}/${id}`
);