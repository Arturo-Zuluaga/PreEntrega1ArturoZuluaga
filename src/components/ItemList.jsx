
import Item from './Item'
import { Box, Flex,  } from '@chakra-ui/react'

const ItemList = ({productos =[]}) => {
  
  return (
    <Flex  flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
      {
        productos.map((p)=>{
          console.log("producto",p)
          return (

            <Box key={String(p.id)}>
           
            <Item producto = {productos}/>
            
             </Box>
              
         
            
          )
        })
      }
  </Flex>
    
  )
}

export default ItemList