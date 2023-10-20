import React from 'react'
import styles from './Home.module.css'
import Contenedor from '../components/ContenedorCards/Contenedor'
import Cabecera from '../components/Cabecera/Cabecera'
import Modal from '../components/Modal/Modal'
import ContenedorLista from '../components/ContenedorLista/ContenedorLista'

function Home() {
  return (
    <div className={styles.home}>
      <Modal>
        <ContenedorLista/>
      </Modal>
      <Cabecera/>
      <Contenedor/>
    </div>
  )
}

export default Home