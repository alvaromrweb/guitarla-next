import Link from 'next/link'
import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {
  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{curso.titulo}</h2>
                <p className={styles.texto}>{curso.descripcion}</p>
                <Link href="/cursos">
                    <a className={styles.boton}>
                      Más información  
                    </a>
                </Link>
            </div>
        </div>
        <style jsx>{`
            section {
                padding:10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${curso.imagen.url});
                background-size:cover;
                background-position:center;
            }
        `}</style>
    </section>
  )
}

export default Curso