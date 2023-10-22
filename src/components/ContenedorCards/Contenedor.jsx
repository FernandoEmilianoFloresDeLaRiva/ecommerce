import React from "react";
import styles from "./Contenedor.module.css";
import Card from "../../components/Card/Card";
import Modal from "../Modal/Modal";
import Agregar from "../AgregarProducto/Agregar";
import { useUpdate } from "../../hooks/useUpdate";

function Contenedor({ textButton, handleDelete = null }) {
  const {
    estadoModal,
    cambiarEstadoModal,
    handleSubmit,
    productos,
    handleDeseados,
  } = useUpdate();
  return (
    <section className={styles.contenedor}>
      {productos.map((producto, index) => (
        <Card
          funcion={
            handleDelete
              ? () => cambiarEstadoModal(index)
              : () => handleDeseados(producto.id)
          }
          textButton={textButton}
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          img={producto.img}
          borrar={handleDelete ? (e) => handleDelete(producto.id, e) : null}
        />
      ))}
      {estadoModal && handleDelete && (
        <Modal cerrar={cambiarEstadoModal}>
          <Agregar dispatch={(objeto) => handleSubmit(objeto)} />
        </Modal>
      )}
    </section>
  );
}

export default Contenedor;
