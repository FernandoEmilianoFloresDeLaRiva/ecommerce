import React from "react";
import styles from "./ItemsLista.module.css";
import deleteIcon from "../../assets/delete.svg";

function ItemsLista({ nombre, cantidad, handleDelete }) {
  return (
    <div className={styles.item}>
      <p>{nombre}</p>
      <div className={styles.contenedorInfo}>
        <p className={styles.cantidad}>{cantidad}</p>
        <button onClick={handleDelete}>
          <img src={deleteIcon} alt="borrar-icono" />
        </button>
      </div>
    </div>
  );
}

export default ItemsLista;
