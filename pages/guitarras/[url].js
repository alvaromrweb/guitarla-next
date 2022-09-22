
import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {

  const [cantidad, setCantidad] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(cantidad < 1) {
      alert('Cantidad no válida')
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.id,
      imagen: guitarra.imagen.url,
      nombre: guitarra.nombre,
      precio: guitarra.precio,
      cantidad: cantidad
    }

    agregarCarrito(guitarraSeleccionada)
    
  }

    return (
        <Layout pagina={`Guitarra ${guitarra.nombre}`}>
            <div className={styles.guitarra}>
              
              <Image priority="true" width={150} height={300} layout='responsive' src={guitarra.imagen.url} alt={`imagen guitarra ${guitarra.nombre}`} />
                
              <div className={styles.contenido}>
                <h3>{guitarra.nombre}</h3>
                <p className={styles.descripcion}>{guitarra.descripcion}</p>
                <p className={styles.precio}>{guitarra.precio} €</p>
                <form className={styles.formulario} onSubmit={handleSubmit}>
                  <label>
                    Cantidad:
                  </label>
                  <select value={cantidad} onChange={e => setCantidad(e.target.value)}>
                    <option value="">Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <input type="submit" value="Añadir al carrito" />
                </form>
              </div>
                
              
            </div>
        </Layout>
    )
}


export async function getServerSideProps({query: {url}}) {

  const urlGuitarras = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarras)
  const guitarra = await respuesta.json()
  

  return {
    props: {
      guitarra: guitarra[0]
    }
  }
}

export default Producto