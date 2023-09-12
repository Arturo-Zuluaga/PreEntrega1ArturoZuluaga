
import {  Card, CardBody,  Heading, CardFooter, Text, Center, CardHeader } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'


const ItemDetail =(productos) => {
    const { id } = useParams()
    
    const filteredProducts = productos.filter((producto) => producto.id == id);
    
    console.log(productos)
    

  return (

      <div>

          {filteredProducts.map((producto) => {




return (

  <div key={productos.id}>

      <Center p='1rem'>



          <Card>

              <CardHeader>

                  <Heading size='md'>{producto.nombre}</Heading>

              </CardHeader>

              <CardBody>

                  <Text>{producto.description}</Text>

                  <Text>{producto.category}</Text>

              </CardBody>

              <CardFooter>
                  <>
                  <ItemCount />
                  </>
              </CardFooter>

          </Card>

      </Center>

  </div>

)

})}

</div>

)

}


export default ItemDetail




