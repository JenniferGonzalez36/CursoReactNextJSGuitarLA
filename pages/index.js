import Link from 'next/link'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Layout
        title = "Inicio"
        descritption = 'Blog de música, venta de guitarras y más'
      >
        <h1>INDEX</h1>
      </Layout>
    </>
  )
}
