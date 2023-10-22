import React from "react";
import { Link } from "wouter";
import styles from "./Cabecera.module.css";
import { useSelector } from "react-redux";

function Cabecera({ texto, abrir = null, textoBoton }) {
  const deseados = useSelector((state) => state.deseados);
  return (
    <header className={styles.contenedor}>
      Shop
      <div>
        <Link href={texto === "Admin" ? "/admin" : "/"}>
          <a>{texto}</a>
        </Link>
        {abrir && <button onClick={abrir}>{textoBoton}</button>}
        {textoBoton === "Carrito" && <p>{deseados.length}</p>}
      </div>
    </header>
  );
}

export default Cabecera;
