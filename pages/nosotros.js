import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" lat="Imagen sobre nosotros" />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet tellus tristique diam varius pulvinar. Etiam consectetur lorem nisl, ac auctor purus tempus eget. Ut faucibus nisi at enim pretium faucibus. Phasellus sed nisl id metus condimentum accumsan. Curabitur tincidunt euismod vulputate. Fusce ac cursus velit. Nunc vel pellentesque nulla. Nam vehicula euismod felis eu rhoncus. Morbi vel tincidunt nisl, in finibus nisi. Fusce finibus, dolor at faucibus lobortis, justo nisi tristique mauris, pretium feugiat sapien diam ac elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet tellus tristique diam varius pulvinar. Etiam consectetur lorem nisl, ac auctor purus tempus eget. Ut faucibus nisi at enim pretium faucibus. Phasellus sed nisl id metus condimentum accumsan. Curabitur tincidunt euismod vulputate. Fusce ac cursus velit. Nunc vel pellentesque nulla. Nam vehicula euismod felis eu rhoncus. Morbi vel tincidunt nisl, in finibus nisi. Fusce finibus, dolor at faucibus lobortis, justo nisi tristique mauris, pretium feugiat sapien diam ac elit.</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default Nosotros