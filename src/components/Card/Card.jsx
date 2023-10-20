import React from "react";
import styles from "./Card.module.css";

function Card() {

  return (
    <article className={styles.contenedor}>
      <img src="../../../public/vite.svg"/>
      <h3>Articulo 1</h3>
      <small>$100.00</small>
      <button>Agregar</button>
    </article>
  );
}

export default Card;
