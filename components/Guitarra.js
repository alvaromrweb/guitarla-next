import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
  return (
    <div className={styles.guitarra}>
      <Link href={`/guitarras/${guitarra.url}`}>
        <a>
          <Image priority="true" width={150} height={300} layout='responsive' src={guitarra.imagen.url} alt={`imagen guitarra ${guitarra.nombre}`} />
        </a>
      </Link>
      <div className={styles.contenido}>
        <h3>{guitarra.nombre}</h3>
        <p className={styles.descripcion}>{guitarra.descripcion}</p>
        <p className={styles.precio}>{guitarra.precio} €</p>
        <Link href={`/guitarras/${guitarra.url}`}>
          <a className={styles.boton}>
            Ver producto
          </a>
        </Link>
      </div>
        
      
    </div>
  )
}

export default Guitarra