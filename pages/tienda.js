import Layout from '../components/Layout'
import Guitarra from '../components/Guitarra'
import styles from '../styles/Blog.module.css'
import Listado from '../components/Listado'

const Tienda = ({guitarras}) => {
  return (
    <Layout pagina='Tienda virtual'>
        <main className='contenedor'>
          <h2 className='heading'>Nuestra colección</h2>
          <Listado guitarras={guitarras} />
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()


  return {
    props: {
      guitarras
    }
  }
}

export default Tienda