
import { Divider, Stack, Card, CardBody, Image, Heading, CardFooter, ButtonGroup, Button, Text,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

  const Item = ({ productos } ) => {
  

  return (
  
    <Card maxW='xs' margin="20px" height="50%" width="100%" backgroundColor='rgba(219, 252, 253, 0.946)'>
   
      <CardBody  
      
       backgroundColor="" borderRadius="5px" >
        <Image
          src={"image"}
          alt='imagen del producto'
          borderRadius='lg'
         
         
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{"title"}</Heading>
          <Text>
            {"description"}
          </Text>
         
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          
          <Button variant='solid' colorScheme='blue' >
            <Link to={"/ItemCount/${p.id}"}>
            Ir al detalles </Link>
          </Button>
          
        </ButtonGroup>
      </CardFooter>
      
    </Card>
    
  )
}
export default Item