import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
    if(carritoLS.length > 0) {
      
      setCarrito(carritoLS)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = (producto) => {
    // Comprobar si esta ya en el carrito ese producto
    if (carrito.some( articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map( articulo => {
        if(articulo.id === producto.id) {
          articulo.cantidad = parseInt(producto.cantidad)
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const cambiarCantidad = (producto) => {
    const carritoActualizado = carrito.map( articulo => {
      if(articulo.id === producto.id) {
        articulo.cantidad = parseInt(producto.cantidad)
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter( articulo => articulo.id != id)
    setCarrito(carritoActualizado)
  }

  return <Component 
    {...pageProps} 
    carrito={carrito} 
    agregarCarrito={agregarCarrito}
    cambiarCantidad={cambiarCantidad}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
