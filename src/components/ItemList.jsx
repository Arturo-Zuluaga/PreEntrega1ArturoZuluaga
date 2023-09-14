
import Item from './Item'
import { Box, Flex,  } from '@chakra-ui/react'

const ItemList = ({productos=[] }) => {
  
  return (
    <Flex  flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
      {
        productos.map((p)=>{[]
          
          return (

            <Box key={String(p.id)}>
           
            <Item producto = {p}/>
            
             </Box>
              
         
            
          )
        })
      }
  </Flex>
    
  )
}

export default ItemList