import { createSlice } from "@reduxjs/toolkit";
import { DESEADOS } from "../../../constants/INITIAL_DESEADOS";
import { addDeseadoReducer, deleteDeseadoReducer, deleteAllCantidadReducer } from "../../reducer/deseadosReducer";

export const deseadosSlice = createSlice({
  name: "deseados",
  initialState: DESEADOS,
  reducers: {
    addDeseado: addDeseadoReducer,
    deleteDeseado : deleteDeseadoReducer,
    deleteAllCantidad : deleteAllCantidadReducer,
  },
});

export default deseadosSlice.reducer;
export const { addDeseado, deleteDeseado, deleteAllCantidad } = deseadosSlice.actions;
