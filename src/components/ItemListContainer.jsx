import {Flex, Box, background } from '@chakra-ui/react'
import React from 'react'
import "../main.css";

const ItemListContainer = ({greeting}) => {
  return (

    <Flex className='container'>
        <Box className='contenedor' >
            <h1>{greeting}</h1>
   
        </Box>

    </Flex>
  )
}

export default ItemListContainer