import React from 'react'
import { CartContext } from './CartContext'
import { Box, Button } from '@chakra-ui/react'
import { useContext } from 'react'


const CartItem = ({producto}) => {
    const {quitarDelCart, quitarUnidad} = useContext(CartContext)
  return (
     <Box>
             <img src={producto.imagen} alt={producto.nombre} />
        
            <h3>{producto.nombre}</h3>
            <h4>Cantidad:{producto.quantity}</h4>
            <h4>${producto.precio} c/u</h4>
            <h4>Subtotal: ${producto.quantity * producto.precio}</h4>
            <Button onClick={() => quitarDelCart(producto.id)} className='eliminarBtn'>Eliminar</Button>

            </Box>
    
  )
}

export default CartItem



//className='itemCart'// 
// className='imgCart'