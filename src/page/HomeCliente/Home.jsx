import React, { useState } from "react";
import styles from "./Home.module.css";
import Contenedor from "../../components/ContenedorCards/Contenedor";
import Cabecera from "../../components/Cabecera/Cabecera";
import Modal from "../../components/Modal/Modal";
import ContenedorLista from "../../components/ContenedorLista/ContenedorLista";

function Home() {
  const [estadoModal, setAbrir] = useState(false);
  const cambiarEstadoModal = () => setAbrir((prev) => !prev);
  return (
    <div className={styles.home}>
      <Cabecera
        texto={"Admin"}
        abrir={cambiarEstadoModal}
        textoBoton={"Carrito"}
      />

      <main>
        {estadoModal && (
          <Modal cerrar={cambiarEstadoModal}>
            <ContenedorLista />
          </Modal>
        )}
        <Contenedor textButton={"agregar"} />
      </main>
    </div>
  );
}

export default Home;
