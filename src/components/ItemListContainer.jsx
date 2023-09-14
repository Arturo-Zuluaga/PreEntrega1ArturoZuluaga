import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"

const productosMock = [
  { id: "1", nombre: "Anillo de perla", descripcion: "Anillo de perla trabjado con tecnica de alambrismo fino", stock: 5, categoria: "Anillos", imageUrl: "https://admin.centecpro.com/SVsitefiles/centeclima/contenido/med/e6cb2b_alambre%2011.jpg" },
  { id: "2", nombre: "Anillo de perla", descripcion: "Anillo de perla trabjado con tecnica de alambrismo fino", stock: 10, categoria: "Anillos", imageUrl: "https://i.pinimg.com/736x/7a/4f/b3/7a4fb3ff8d17a921941bdfbdd41e8018.jpg" },
  { id: "3", nombre: "Pulsera de jade", descripcion: "Pulsera de jade", stock: 20, categoria: "Pulseras", imageUrl: "https://molena.com.ar/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-15-at-2.59.52-PM-1.jpeg" },
  { id: "4", nombre: "Pulsera de piedras preciosas", descripcion: "Pulsera de piedras preciosas", stock: 15, categoria: "Pulseras", imageUrl: "https://us.123rf.com/450wm/chic2view/chic2view1805/chic2view180500019/100982952-cuentas-de-pulsera-de-piedra-de-la-suerte-de-espectro-colorido-sobre-fondo-de-toalla-blanca-moda.jpg?ver=6" },
  { id: "5", nombre: "Zarcillos de oro 12K", descripcion: "Zarcillos de oro 12K, en tecnica de joyeria fina", stock: 25, categoria: "Zarcillos", imageUrl: "https://img.bestdealplus.com/ae04/kf/H0a0cee4e74244ec1af4808da99cc4eaeh.jpg" },
  { id: "6", nombre: "Zarcillos de oro 12K", descripcion: "Zarcillos de oro 12K, en tecnica de joyeria fina", stock: 30, categoria: "Zarcillos", imageUrl: "https://img.bestdealplus.com/ae04/kf/Hf3ac6526dd3c46e8955fd05b7fa5efaaa.jpg" },
]
const getProductos = new Promise((resolve, reject) => {
  if (productosMock.length > 0) {
    setTimeout(() => { resolve(productosMock) }, 2000)
  } else {
    reject(new Error("no hay datos"))
  }
})

const getProductosByCategoria = (categoria, productos = []) => {
  if (categoria) {
    const filteredProductos = productos.filter((producto) => producto.categoria === categoria)
    return (filteredProductos)
  } else {
    return (productos)
  }
}
const ItemListContainer = () => {
  const { categoria } = useParams()
  console.log(categoria)

  const productos = getProductosByCategoria(categoria, productosMock)

  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer
















