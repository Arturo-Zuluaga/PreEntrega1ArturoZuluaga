import {Flex, Box } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (

    <Flex>
        <Box m="4">
            <h1>{greeting}</h1>
   
        </Box>

    </Flex>
  )
}

export default ItemListContainer