import Layout from '../components/Layout.js'
import { useState, useEffect } from 'react'
import Image from 'next/image.js'
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito, cambiarCantidad, eliminarProducto}) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const calculoTotal = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)
      setTotal(calculoTotal)
    }, [carrito])
    

  return (
    <Layout pagina='Carrito'>
        <h1 className='heading'>Carrito</h1>
        <main className={`contenedor ${styles.contenido}`}>
            <div className={styles.carrito}>
                {carrito.length <= 0 ? 'Carrito vacío' : (
                    carrito.map(producto => (
                        <div key={producto._id} className={styles.producto}>
                            <div>
                                <Image layout='responsive' width={250} height={480} src={producto.imagen} alt={producto.nombre} />
                            </div>
                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>
                                <div className={styles.cantidad}>
                                    <p>Cantidad: </p>
                                    <select className={styles.select} value={producto.cantidad} onChange={e => cambiarCantidad({id: producto._id, cantidad: e.target.value})}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <p className={styles.precio}>{producto.precio} €</p>
                                <p className={styles.subtotal}>Subtotal: <span>{producto.precio * producto.cantidad}</span> €</p>
                            </div>
                            <button type="button" className={styles.eliminar} onClick={e => eliminarProducto(producto._id)}>x</button>
                        </div>
                    ))
                )}
            </div>
            <div className={styles.resumen}>
                <h3>Resumen del pedido</h3>
                {total > 0 ? (
                    <p>Total a pagar: {total} €</p>
                ): (
                    <p>No hay productos en el carrito</p>
                )}
            </div>
        </main>

    </Layout>
  )
}

export default Carrito