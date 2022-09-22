import Link from 'next/link'
import Image from 'next/image'
import {formatearFecha} from '../helpers'
import styles from '../styles/Entrada.module.css'

const Noticia = ({entrada}) => {
  return (
    <article>
      <Link href={`/blog/${entrada.url}`}>
        <a>
          <Image priority="true" width={800} height={600} layout='responsive' src={entrada.imagen.url} alt={`imagen blog ${entrada.titulo}`} />
        </a>
      </Link>
      <div className={styles.contenido}>
        <Link href={`/blog/${entrada.url}`}>
          <h3>{entrada.titulo}</h3>
        </Link>
        <p className={styles.fecha}>{formatearFecha(entrada.published_at)}</p>
        <p className={styles.resumen}>{entrada.resumen}</p>
        <Link href={`/blog/${entrada.url}`}>
          <a className={styles.boton}>
            Leer entrada
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Noticia