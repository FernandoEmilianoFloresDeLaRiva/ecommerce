import React from "react";
import styles from "./ItemsLista.module.css";
import deleteIcon from "../../assets/delete.svg";

function ItemsLista() {
  return (
    <div className={styles.item}>
      <p>Producto 1</p>
      <div className={styles.contenedorInfo}>
        <p className={styles.cantidad}>10</p>
        <button>
          <img src={deleteIcon} alt="borrar-icono" />
        </button>
      </div>
    </div>
  );
}

export default ItemsLista;
