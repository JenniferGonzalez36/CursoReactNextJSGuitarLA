import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      title = 'Nosotros'
      descritption = 'Sobre nosotros, guitarLA, tienda de música'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width="1000" height="800" alt="Imagen sobre nosotros" />
            <div>
              <p>Vestibulum et aliquam ex. Duis nisl lacus, venenatis a gravida et, faucibus porta sapien. Morbi placerat egestas est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin feugiat neque sapien, non finibus nisl ultrices varius. Integer pharetra malesuada nisi ac auctor.</p>

              <p>Curabitur rhoncus metus sapien, commodo pharetra quam congue id. Phasellus non accumsan odio. Cras eu tortor sollicitudin, consectetur nunc facilisis, egestas tortor. Nunc scelerisque lectus quis eleifend eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
        </main>
    </Layout>
    
  )
}

export default Nosotros