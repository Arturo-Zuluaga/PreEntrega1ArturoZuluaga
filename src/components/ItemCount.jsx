
import React from 'react'
import {Box,Flex, Center, Button, Text, } from '@chakra-ui/react'
import { useState } from 'react'



const ItemCount = () => {

  const [contador, setContador] = useState(0)

  const confirmarCompra = () => {
    alert("gracias por su compra" + contador + "productos")
     setContador(0)
    }
return(
  
  <>
  <div className='center'>
    <Center>
      <Flex >
        <Box px="2">
        <Button variant='solid' colorScheme='blue'  onClick={()=> contador > 0? setContador(contador - 1): setContador(0)}>-</Button>
         

        </Box>
        <Box px="2">
        <Text fontSize={32} >
          <p>{contador}</p>
        </Text>
        </Box>
        <Box px="2">
        <Button variant='solid' colorScheme='blue'  onClick={()=> contador < 10? setContador(contador + 1): setContador(10)} >+</Button>
         
        </Box>
        <Box px="2">
        <Button onClick={(confirmarCompra)} variant='solid' colorScheme='blue' >
          
            Comprar
          </Button>
      </Box>

      </Flex>

    </Center>

  </div>
  </>
)

  
  
}
export default ItemCount