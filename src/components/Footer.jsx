import React from 'react'
import { Flex, Box, Image, Spacer, AspectRatio } from '@chakra-ui/react'



const Footer = () => {
    return (

        <Box margin="30px" marginTop="50px" >

            <AspectRatio width="600" height="450" ratio={16 / 5}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13091.117812442306!2d-56.1833698!3d-34.8868841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f803f02e51d29%3A0xb4008a87a06f914d!2sMercado%20Agr%C3%ADcola%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1696598597675!5m2!1sen!2suy"></iframe>
            </AspectRatio>



            <Spacer />
            <Flex>

                <Box p='4' >
                    <span >
                        Sede
                    </span> <br />
                    <span>
                    José L. Terra 2220, 11800 Montevideo, <br />
                    Departamento de Montevideo, Uruguay.
                    </span> <br />

                </Box>
                <Spacer />
                <Box p='4' className='span'>
                    <span className='span-title'>Joyeria La realeza</span><br />
                    <span>Telefono: <br /> 099-456-784</span>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer