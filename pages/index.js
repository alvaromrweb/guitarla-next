import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import BlogHome from '../components/BlogHome'

export default function Home({guitarras, curso, entradas}) {
  console.log(curso)
  return (
    <Layout pagina='Inicio' guitarra={guitarras[3]}>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className='contenedor'>
        <BlogHome entradas={entradas} />
        
      </section>
    </Layout>
    
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras), 
    fetch(urlCursos),
    fetch(urlBlog)
  ])
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}