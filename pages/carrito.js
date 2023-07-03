import React from 'react'
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";
import Image from 'next/image';

const Carrito = ({carrito}) => {
  return (
    <Layout>
        <main className='contenedor'>
            <h1 className='heading'>Carrito</h1>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Artículos</h2>
                    {carrito?.length === 0 ? 'Carrito vacío' : (
                        carrito?.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image width={250} height={400} src={producto.imagen} alt={producto.nombre}/>
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: </p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

export default Carrito