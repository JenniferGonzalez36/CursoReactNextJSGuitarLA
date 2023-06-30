import Curso from '../components/curso';
import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras';
import Post from '../components/post';
import styles from '../styles/grid.module.css';

export default function Home({guitarras, posts, curso}) {
  return (
    <>
      <Layout
        title = "Inicio"
        descritption = 'Blog de música, venta de guitarras y más'
      >
        <main className='contendedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <ListadoGuitarras 
            guitarras={guitarras} 
          />
        </main>

        <Curso 
          curso = {curso}
        />

        <section className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            ))}

          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen&sort=id:ASC`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen&sort=id:ASC`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);

  const [guitarras, posts, curso] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ]);

  return {
    props: {
      guitarras: guitarras.data,
      posts: posts.data,
      curso: curso.data
    }
  }
}