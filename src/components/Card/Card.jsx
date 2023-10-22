import React from "react";
import styles from "./Card.module.css";
import deleteIcon from "../../assets/delete.svg";

function Card({
  funcion,
  textButton,
  borrar = null,
  img = null,
  precio,
  nombre,
}) {
  return (
    <article className={styles.contenedor}>
      <img src={img} alt="Imagen del producto" />
      <div className={styles.info}>
        <h3>{nombre}</h3>
        <small>${precio}</small>
      </div>
      <div className={styles.botones}>
        <button onClick={funcion}>{textButton}</button>
        {borrar && (
          <button className={styles.borrar} onClick={borrar}>
            <img src={deleteIcon} alt="borrar-icono" />
          </button>
        )}
      </div>
    </article>
  );
}

export default Card;
