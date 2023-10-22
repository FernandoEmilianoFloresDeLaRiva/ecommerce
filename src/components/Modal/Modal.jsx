import React from "react";
import styles from "./Modal.module.css";

function Modal({ children, cerrar }) {
  return (
    <div className={styles.modal}>
      <i onClick={cerrar}>X</i>
      {children}
    </div>
  );
}

export default Modal;
