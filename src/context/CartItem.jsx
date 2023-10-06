import React from 'react'
import { CartContext } from './CartContext'
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import { useContext } from 'react'


const CartItem = ({ producto }) => {

  const { nombre, quantity, precio, id, imagen } = producto

  const { quitarDelCart, quitarUnidad } = useContext(CartContext)
  return (
    <Box  marginTop="20px"  display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">
    
    <HStack  >
      <Image
        boxSize='150px'
        objectFit='cover'
        width="500px"
        borderRadius="10px"
        src={imagen}
        alt={nombre} />

      <h3>{nombre}</h3>
      <h4>Cantidad:{quantity}</h4>
      <h4>${precio} c/u</h4>
      <h4>Subtotal: ${quantity * precio}</h4>
      <Button onClick={() => quitarDelCart(id)}>Eliminar</Button>

    </HStack>
    </Box>

  )
}

export default CartItem

