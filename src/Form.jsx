import { Spacer, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StackDivider, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import CartContextProvider, { CartContext } from './context/CartContext'
import Swal from 'sweetalert2'

const Form = ({ getbuyer }) => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
   

    const handleSubmit = (e) => {

        e.preventDefault()
        if(nombre === ""){
            return  alert("campo nombre vacío")
        }

        if(email === ""){
            return  alert("campo email vacío")

        }

        if(telefono === ""){
            return  alert("campo telefono vacío")

        }

       
        Swal.fire(`Bienvenido, ${nombre}`)
        

        const buyer = {
            nombre, email, telefono
        }
        onClose()
        if (getbuyer) {
            getbuyer(buyer)
        }

    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box>
                <Button marginLeft="800px" marginTop="20px" display="flex"
                    flexDirection="column" alignItems="center"
                    justifyContent="left" fontSize="25px"
                    onClick={onOpen}>finalizar compra</Button>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">Formulario para nuestros clientes </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">


                            <form onSubmit={handleSubmit} >
                                <Spacer />
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="nombre" placeholder=' Agruegue su nombre' onChange={(e) => setNombre(e.target.value)} />
                                <Spacer />
                                <label htmlFor="Telefono">Telefono:</label>
                                <input type="number" placeholder=' Agruegue su Telefono' onChange={(e) => setTelefono(e.target.value)} />
                                <Spacer />
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder=' Agruegue su email' onChange={(e) => setEmail(e.target.value)} />
                                <Spacer />

                                <Spacer />

                            </form>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} variant='ghost'>cancelar</Button>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit} >
                            Confirmar orden
                        </Button>


                    </ModalFooter>
                </ModalContent>
            </Modal>
            </>
            )
    
        }






            export default Form

