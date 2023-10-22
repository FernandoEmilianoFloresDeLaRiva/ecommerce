import React from "react";
import styles from "./ContenedorLista.module.css";
import ItemsLista from "../ItemsLista/ItemsLista";
import { useDispatch, useSelector } from "react-redux";
import { deleteDeseado } from "../../Redux/features/ProductosDeseados/deseadosSlice";

function ContenedorLista() {
  const items = useSelector((state) => state.deseados);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteDeseado(id));
  };
  return (
    <div className={styles.contenedor}>
      {items.length ? (
        items
          .slice(0, 9)
          .map((item) => (
            <ItemsLista
              nombre={item.nombre}
              cantidad={item.cantidad}
              key={item.id}
              handleDelete={() => handleDelete(item.id)}
            />
          ))
      ) : (
        <p>¡No hay nada en el carrito!</p>
      )}
    </div>
  );
}

export default ContenedorLista;
