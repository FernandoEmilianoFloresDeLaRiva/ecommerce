import React from 'react'
import styles from './Contenedor.module.css'
import Card from '../../components/Card/Card'

function Contenedor() {
  return (
    <div className={styles.contenedor}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Contenedor