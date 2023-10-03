import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
  const { categoria } = useParams()
  console.log(categoria)

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    if (categoria) {

      const itemsCollection = query(collection(db, "joyeria-la-realeza"), where("categoria", "==", categoria));
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProductos(docs)
      })
    } else {
      const itemsCollection = collection(db, "joyeria-la-realeza")
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProductos(docs)
      })
    }
  }, [categoria])


  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer

















