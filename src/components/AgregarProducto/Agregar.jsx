import React, { useState } from "react";
import styles from "./Agregar.module.css";
import { conseguirImg } from "../../utils/conseguirImg";
function Agregar({ dispatch }) {
  const [producto, setProducto] = useState({
    img: "",
    nombre: "",
    precio: 0.0,
  });
  const handleChange = async ({ target }) => {
    if (target.id === "img") {
      let urlImg = await conseguirImg(target);
      setProducto({ ...producto, [target.id]: urlImg });
      return;
    }
    setProducto({ ...producto, [target.id]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(producto);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nombre">Agregue nombre del producto</label>
      <input id="nombre" type="text" required onChange={handleChange} />
      <label htmlFor="precio">Agregue el precio</label>
      <input type="number" id="precio" required onChange={handleChange} />
      <label htmlFor="img">Agregue una imagen</label>
      <input type="file" id="img" onChange={handleChange} />
      <button>Crear Producto</button>
    </form>
  );
}

export default Agregar;
