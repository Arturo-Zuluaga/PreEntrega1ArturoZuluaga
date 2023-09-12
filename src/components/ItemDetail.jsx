
import {  Card, CardBody,  Heading, CardFooter, Text, Center, CardHeader } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'


const ItemDetail = ({ producto }) => {
  console.log(producto)
  const { id } = useParams()

  const filteredProducts = producto.filter((producto) => producto.id == id);



  return (

      <div>

          {filteredProducto.map((p) => {




return (

  <div key={p.id}>

      <Center p='1rem'>



          <Card>

              <CardHeader>

                  <Heading size='md'>{producto.nombre}</Heading>

              </CardHeader>

              <CardBody>

                  <Text>{productos.description}</Text>

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




