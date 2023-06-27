import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link';

export default function Pagina404() {
  return (
    <Layout
        title='Página No Encontrada'
    >
        <p className='error'>Página No Encontrada 404</p>
        <Link href="/" className='error-enlace'>Ir al inicio</Link>
    </Layout>
  )
}
