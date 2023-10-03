
import { Divider, Stack, Card, CardBody, Image, Heading, CardFooter, ButtonGroup, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {


  return (

  
    <Card  display="grid" flexDirection="column"
    margin="100px" width="500px" height="auto"  border="burlywood" 
     justify-content= "center"> 
      <CardBody borderRadius="5px" >
        <Image 
          src={producto.imagen}
          alt='imagen del producto'
          
          width="100#"
          height="auto"/>

        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text>
            {producto.descripcion}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter >
        <ButtonGroup spacing='2' >
          <Button variant='solid' colorScheme='blue' >
            <Link to={"/item/" + producto.id} >
              Ir al detalles </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
 
  )
}
export default Item