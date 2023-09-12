
import {  Card, CardBody,  Heading, CardFooter, Text, Center, CardHeader } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'


const ItemDetail = ({ productos }) => {
  console.log(productos)
  const { id } = useParams()

  const filteredProducts = p.filter((producto) => producto.id == id);



  return (

      <div>

          {filteredProducts.map((p) => {




return (

  <div key={p.id}>

      <Center p='1rem'>



          <Card>

              <CardHeader>

                  <Heading size='md'>{"p.nombre"}</Heading>

              </CardHeader>

              <CardBody>

                  <Text>{"p.description"}</Text>

                  <Text>{"p.category"}</Text>

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




