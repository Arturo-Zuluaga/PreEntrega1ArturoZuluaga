import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import { Text } from '@chakra-ui/react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const { id} = useParams()
  console.log(id,)

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore()

    const oneItem = doc(db, "joyeria-la-realeza",`${id}` )
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const result = snapshot.data()
        console.log(result)
        setProducto(result)
      }else{setProducto(null)}
    })
  },[id])

  console.log(producto)
  if (producto===null) {
    return ( 
    <>
      <Text>
        "NO SE ENCONTRO EL ELEMENTO"
      </Text>

    </>)
    
  } else {
    
  return (
    <>
      <ItemDetail producto={producto} />

    </>
  )
}
}


export default ItemDetailContainer











