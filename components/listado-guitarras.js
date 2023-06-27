import React from 'react'
import Guitarra from './guitarra'
import styles from '../styles/grid.module.css';


export default function ListadoGuitarras({guitarras}) {
  return (
    <div className={styles.grid}>
     {guitarras?.map(guitarra => (
        <Guitarra 
            key={guitarra.id}
            guitarra={guitarra.attributes}
        />
     ))}
    </div>
  )
}
