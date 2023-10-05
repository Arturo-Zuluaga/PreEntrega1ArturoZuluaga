import { Card, CardBody, Heading, CardFooter, Text, Stack, Divider, Image, Box, } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ producto }) => {
    const { id, categoria, nombre, imagen, descripcion, precio } = producto


    const { addItem } = useContext(CartContext)

    const getQuantity = (quantity) => {


        const item = {
            precio, id, categoria, descripcion, imagen
        }

        addItem(item, quantity)
    }

    console.log(producto)
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px" marginTop="50px"
            marginLeft="100px"
            marginRight="100px"
            marginBottom="50px"
        >
            <Card backgroundColor="beige" display="flex" flexDirection="column" alignItems="center" justifyContent=" center">
                <CardBody >
                    <Image width="500px" height="auto" borderRadius="10px"
                        src={imagen}
                        alt='imagen del producto'
                        width="100%"

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
                    <Divider />
                </CardBody>

                <CardFooter alignItems="center" justifyContent=" center">
                    <ItemCount handleOnAdd={getQuantity} precio={producto.precio} />
                </CardFooter>
            </Card>
        </Box>
    )
}
export default ItemDetail