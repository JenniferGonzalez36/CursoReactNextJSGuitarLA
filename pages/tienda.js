import React from 'react'
import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras'

/*export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data: guitarras} = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}*/


export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data: guitarras} = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}


export default function Tienda({guitarras}) {
  return (
    <Layout
      title = 'Tienda Virtual'
      descritption = 'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <ListadoGuitarras
            guitarras = { guitarras }
          />
        </main>
    </Layout>
    
  )
}