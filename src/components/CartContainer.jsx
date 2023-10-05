import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StackDivider, Text, VStack, useDisclosure } from '@chakra-ui/react'
import CartItem from '../context/CartItem'
import Form from '../Form'
import { addDoc, collection, getFirestore } from 'firebase/firestore'



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

  if (cart.length === 0) {
    return (

      <Box>
        <Text>
          no ha agregado ningun producto al carrito
        </Text>
      </Box>)
  }
  return (
    <Box>
      <VStack
        divider={
          <StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        {cart.map((p, index) => {
          return (
            <Box key={index} h='100px'>
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