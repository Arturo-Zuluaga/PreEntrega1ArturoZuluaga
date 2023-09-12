import React from 'react'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

  const productos = [
    {id:1, nombre:"producto A", descripcion: "descripcion producto A", stock: 5, categoria:"A" },
    {id:2, nombre:"producto B", descripcion: "descripcion producto B", stock: 10, categoria:"A" },
    {id:3, nombre:"producto C", descripcion: "descripcion producto C", stock: 20, categoria:"B"} ,
    {id:4, nombre:"producto D", descripcion: "descripcion producto D", stock: 15, categoria:"B"},
    {id:5, nombre:"producto E", descripcion: "descripcion producto E", stock: 25, categoria:"C"},
    {id:6, nombre:"producto F", descripcion: "descripcion producto F", stock: 30, categoria:"C"},

  ]
  const getProductos = new Promise ((resolve, reject) =>{
    if (productos.length > 0){
      setTimeout(() => {resolve (productos)},2000)
    } else {
      reject(new Error ("no hay datos"))
    }
  })
     getProductos.them((res)=>{
   })
   .catch((error) =>{console.log(error)
  })

const filteredProducts= productos.filter((producto) => producto.category === category)
    
  return(
    <>
    <ItemDetail productos ={
      productos
      }/>
    </>

)
 
}

export default ItemDetailContainer











