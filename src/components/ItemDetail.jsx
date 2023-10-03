import { Card, CardBody, Heading, CardFooter, Text, Stack, Divider, Image, Box, } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ producto, id,categoria, descripcion,precio }) => {

    const [quatityAdded, setQuatityAdded] = useState(0)

    const {addItem}= useContext(CartContext)

    const handleOnAdd = (quatity) =>{
        setQuatityAdded(quatity)

        const item = {
            precio,id,categoria,descripcion
        }

        addItem(item, quatity)
    }

    console.log(producto)
    return (
      <Box marginTop="50px"
      marginLeft="500px"
      marginRight="500px"
      >
        <Card backgroundColor="beige"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent=" center">
            <CardBody >
                <Image  width="500px" height="auto"
                    src={producto.imagen}
                    alt='imagen del producto'
                    borderRadius='lg'
                />
                <Stack mt='10' spacing='5'>
                    <Heading size='md'>{producto.nombre}</Heading>
                    <Text>
                        {producto.descripcion}
                    </Text>
                    <Text>
                       Precio unidad {producto.precio}
                    </Text>
                </Stack>
                <Divider/>
            </CardBody>
          
            <CardFooter 
        
        
        alignItems="center"
        justifyContent=" center">
                <ItemCount precio={producto.precio} />
            </CardFooter>
        </Card>
        </Box>
    )
}
export default ItemDetail




