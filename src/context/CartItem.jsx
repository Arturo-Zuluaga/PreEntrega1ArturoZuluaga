import React from 'react'
import { CartContext } from './CartContext'
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import { useContext } from 'react'


const CartItem = ({ producto }) => {

  const { nombre, quantity, precio, id, imagen } = producto

  const { quitarDelCart, quitarUnidad } = useContext(CartContext)
  return (
    <HStack>
      <Image
        boxSize='100px'
        objectFit='cover'
        src={imagen}
        alt={nombre} />

      <h3>{nombre}</h3>
      <h4>Cantidad:{quantity}</h4>
      <h4>${precio} c/u</h4>
      <h4>Subtotal: ${quantity * precio}</h4>
      <Button onClick={() => quitarDelCart(id)}>Eliminar</Button>

    </HStack>

  )
}

export default CartItem

