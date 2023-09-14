
import React from 'react'
import { Box, Flex, Center, Button, Text, Divider, VStack, } from '@chakra-ui/react'
import { useState } from 'react'



const ItemCount = ({precio=0}) => {

  const [contador, setContador] = useState(0)

  const confirmarCompra = () => {
    alert("gracias por comprar" + contador + "productos")
    setContador(0)
  }
  return (

    <Flex>
      <VStack>
      <Center>
        <Box px="2">
          <Button variant='solid' colorScheme='blue' onClick={() => contador > 0 ? setContador(contador - 1) : setContador(0)}>-</Button>
        </Box>
        <Box px="2">
          <Text fontSize={32} >
            {contador}
          </Text>
        </Box>
        <Box px="2">
          <Button variant='solid' colorScheme='blue' onClick={() => contador < 10 ? setContador(contador + 1) : setContador(10)} >+</Button>
        </Box>
      </Center>
      <Center>
         
      <Text fontSize={32} >
          Subtotal:{contador * precio}
        </Text>
        <Box px="2">
          <Button onClick={(confirmarCompra)} variant='solid' colorScheme='blue' >
            Comprar
          </Button>
          
        </Box>
      </Center>
      </VStack>
    </Flex>

  )



}
export default ItemCount