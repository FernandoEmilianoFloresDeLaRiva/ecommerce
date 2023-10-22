import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../../constants/INITIAL_PRODUCTS";
import { addProductoReducer, deleteProductoReducer, updateProductoReducer } from "../../reducer/productoReducer";

export const productosSlice = createSlice({
  name: "productos",
  initialState: PRODUCTS,
  reducers: {
    addProducto: addProductoReducer,
    deleteProducto : deleteProductoReducer,
    updateProducto : updateProductoReducer,
  },
});
 
export default productosSlice.reducer;
export const { addProducto, deleteProducto, updateProducto } = productosSlice.actions;
