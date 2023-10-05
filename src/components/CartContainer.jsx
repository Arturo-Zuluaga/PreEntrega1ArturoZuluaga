import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StackDivider, Text, VStack, useDisclosure } from '@chakra-ui/react'
import CartItem from '../context/CartItem'
import Form from '../Form'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'



const CartContainer = () => {

  const { cart = [] } = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)
  console.log(orderId)
  const getBuyer = (buyer) => {
    const db = getFirestore()
    const ordersCollection = collection(db, "orden de compra")
    const items = cart
    const order = {
      buyer: buyer, items:cart
    }
    console.log(order)
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
  }
  if(orderId){
    return(     <Box>
      <Text marginTop="100px" display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">
      Su compra se realizo de manera exitosa, su orden de compra es la siguiente:

      </Text>
      <Text marginTop="100px" display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">
      {orderId}
      </Text>
      <Box marginTop="100px" display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px" >
      <Button colorScheme='blue' >
      <Link to={"/"} >  volver al inicio
      </Link>
      </Button>
      </Box>
    </Box>


    )
  }

  if (cart.length === 0) {
    return (

      <Box>
        <Text marginTop="100px" display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">

          no ha agregado ningun producto al carrito
        </Text>

        
      </Box>)
  }
  return (
    <Box>
      <VStack marginLeft="200px" marginRight="200px"
        divider={
          <StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
      >
        {cart.map((p, index) => {
          return (
            <Box backgroundColor="beige"   borderRadius="10px" key={index} h='200px' marginLeft="100px" marginRight="100px" margin="20px" border="solid">
              <CartItem producto={p} />
            </Box>
          )
        }
        )
        }
      </VStack>

      <Form  getbuyer={getBuyer}/>

      
    </Box>
  )
}

export default CartContainer