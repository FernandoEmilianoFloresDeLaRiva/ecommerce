import { configureStore } from "@reduxjs/toolkit";
import productoReducer from "../features/productos/productosSlice";
import deseadoReducer from "../features/ProductosDeseados/deseadosSlice";

export const store = configureStore({
  reducer: {
    productos: productoReducer,
    deseados: deseadoReducer,
  },
});
