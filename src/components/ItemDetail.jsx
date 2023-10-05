import { Card, CardBody, Heading, CardFooter, Text, Stack, Divider, Image, Box, } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ producto }) => {
    const { id,categoria,nombre,imagen, descripcion,precio } =producto


    const {addItem}= useContext(CartContext)

    const getQuantity = (quantity) =>{
        

        const item = {
            precio,id,categoria,descripcion,imagen
        }

        addItem(item, quantity)
    }

    console.log(producto)
    return (
      <Box marginTop="50px"
      marginLeft="500px"
      marginRight="500px"
      >
        <Card backgroundColor="beige" display="flex" flexDirection="column" alignItems="center" justifyContent=" center">
            <CardBody >
                <Image  width="500px" height="auto"
                    src={imagen}
                    alt='imagen del producto'
                    borderRadius='lg'
                />
                <Stack mt='10' spacing='5'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text>
                        {descripcion}
                    </Text>
                    <Text>
                       Precio unidad {precio}
                    </Text>
                </Stack>
                <Divider/>
            </CardBody>
          
            <CardFooter  alignItems="center" justifyContent=" center">
                <ItemCount handleOnAdd={getQuantity} precio={producto.precio} />
            </CardFooter>
        </Card>
        </Box>
    )
}
export default ItemDetail