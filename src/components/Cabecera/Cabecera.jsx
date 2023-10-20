import React from 'react'
import styles from './Cabecera.module.css'

function Cabecera() {
  return (
    <header className={styles.contenedor}>
        Shop
        <div>
            <p>Admin</p>
            <button>Carrito</button>
        </div>
    </header>
  )
}

export default Cabecera