import produce from "immer";

export const addDeseadoReducer = (state, action) => {
  try {
    const newState = produce(state, (draft) => {
      const existingProduct = draft.find(
        (producto) => producto.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.cantidad += 1;
      } else {
        draft.push({
          id: action.payload.id,
          nombre: action.payload.nombre,
          cantidad: 1,
        });
      }
    });

    const stateJson = JSON.stringify(newState);
    localStorage.setItem("deseados", stateJson);
    return newState;
  } catch (err) {
    console.error("Error agregando producto", err);
    return state;
  }
};

export const deleteDeseadoReducer = (state, action) => {
  try {
    const newState = produce(state, (draft) => {
      const existingProduct = draft.find(
        (producto) => producto.id === action.payload
      );
      if (existingProduct) {
        existingProduct.cantidad -= 1;
      }
    });

    const filteredState = newState.filter(
      (producto) => producto.cantidad !== 0
    );
    const stateJson = JSON.stringify(filteredState);
    localStorage.setItem("deseados", stateJson);
    return filteredState;
  } catch (err) {
    console.error("Error borrando producto", err);
    return state;
  }
};

export const deleteAllCantidadReducer = (state, action) => {
  try {
    const newState = produce(state, (draft) => {
      const existingProduct = draft.find(
        (producto) => producto.id === action.payload
      );
      if (existingProduct) {
        existingProduct.cantidad = 0;
      }
    });

    const filteredState = newState.filter(
      (producto) => producto.cantidad !== 0
    );
    const stateJson = JSON.stringify(filteredState);
    localStorage.setItem("deseados", stateJson);
    return filteredState;
  } catch (err) {
    console.error("Error borrando producto", err);
    return state;
  }
};
