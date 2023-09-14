import { Card, CardBody, Heading, CardFooter, Text, Stack, Divider, Image, } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {

    console.log(producto)
    return (

        <Card maxW='xs' margin="20px" height="50%" width="100%" backgroundColor='rgba(219, 252, 253, 0.946)'>
            <CardBody
                backgroundColor="" borderRadius="5px" >
                <Image
                    src={producto.imageUrl}
                    alt='imagen del producto'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.nombre}</Heading>
                    <Text>
                        {producto.descripcion}
                    </Text>
                    <Text>
                       Precio unidad {producto.precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ItemCount precio={producto.precio}/>
            </CardFooter>
        </Card>
    )
}
export default ItemDetail




