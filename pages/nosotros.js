import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/layout'

const Nosotros = () => {
  return (
    <Layout
      title = 'Nosotros'
      descritption = 'Sobre nosotros, guitarLA, tienda de música'
    >
        <h1>NOSOTROS</h1>
        <Link href="/">Ir a inicio</Link>
    </Layout>
    
  )
}

export default Nosotros