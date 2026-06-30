import axios from "axios";

// URL base de la API del backend
const API =
  "https://conectacomercio-public.onrender.com/api";

export const crearPedido =
(datos) =>
axios.post(
    API,
    datos
);