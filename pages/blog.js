
import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import BlogHome from '../components/BlogHome'
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {

  console.log(entradas)
  return (
    <Layout pagina='Blog'>
        <main className='contenedor'>
          <BlogHome entradas={entradas} />
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()


  return {
    props: {
      entradas
    }
  }
}

export default Blog