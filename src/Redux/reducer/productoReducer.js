import { v4 as uuidv4 } from "uuid";

export const addProductoReducer = (state, action) => {
  try {
    const id = uuidv4();
    const { img, nombre, precio } = action.payload;
    const objeto = {
      id,
      img,
      precio,
      nombre,
    };
    //Muta el array original
    state.push(objeto);
    const stateJson = JSON.stringify(state);
    localStorage.setItem("productos", stateJson);
  } catch (err) {
    console.error("Error agregando producto", err);
  }
};

export const deleteProductoReducer = (state, action) => {
  try {
    const newState = state.filter((producto) => producto.id !== action.payload);

    const stateJson = JSON.stringify(newState);
    localStorage.setItem("productos", stateJson);
    return newState;
  } catch (err) {
    console.error("Error borrando producto", err);
  }
};

export const updateProductoReducer = (state, action) => {
  try {
    state[action.payload.index] = action.payload.content;
    const stateJson = JSON.stringify(state);
    localStorage.setItem("productos", stateJson);
  } catch (err) {
    console.error("Error actualizando producto", err);
  }
};
