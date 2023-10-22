import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProducto } from "../../Redux/features/productos/productosSlice";
import { deleteAllCantidad } from "../../Redux/features/ProductosDeseados/deseadosSlice";
import styles from "./HomeAdmin.module.css";
import Cabecera from "../../components/Cabecera/Cabecera";
import Agregar from "../../components/AgregarProducto/Agregar";
import Modal from "../../components/Modal/Modal";
import Contenedor from "../../components/ContenedorCards/Contenedor";
import { addProducto } from "../../Redux/features/productos/productosSlice";

function HomeAdmin() {
  const [estadoModal, setAbrir] = useState(false);
  const cambiarEstadoModal = () => setAbrir((prev) => !prev);
  const dispatch = useDispatch();
  const handleDelete = (id, e) => {
    e.preventDefault();
    dispatch(deleteProducto(id));
    dispatch(deleteAllCantidad(id));
  };
  return (
    <div className={styles.home}>
      <Cabecera
        texto={"cliente"}
        textoBoton={"Agregar Producto"}
        abrir={cambiarEstadoModal}
      />
      <main>
        {estadoModal && (
          <Modal cerrar={cambiarEstadoModal}>
            <Agregar dispatch={(producto) => dispatch(addProducto(producto))} />
          </Modal>
        )}
        <Contenedor textButton={"modificar"} handleDelete={handleDelete} />
      </main>
    </div>
  );
}

export default HomeAdmin;
