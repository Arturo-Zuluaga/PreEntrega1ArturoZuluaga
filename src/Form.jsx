import { Spacer, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StackDivider, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from './context/CartContext'

const Form = ({ getbuyer }) => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")


    const handleSubmit = (e) => {

        e.preventDefault()
        // nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        // telefono === "" ? alert("campo email vacío") : alert(`Registrado con el telefono, ${telefono}`)
        // email === "" ? alert("campo telefono vacío") : alert(`Registrado con el email, ${email}`)

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
            <Button onClick={onOpen}>finalizar compra</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            display="flex" flexDirection="column" alignItems="center" justifyContent=" center" fontSize="25px">

                            <Text fontSize={32}>Formulario para nuestros clientes </Text>
                            <form onSubmit={handleSubmit} >
                                <Spacer />
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="nombre" placeholder='agruegue su nombre' onChange={(e) => setNombre(e.target.value)} />
                                <Spacer />
                                <label htmlFor="Telefono">Telefono:</label>
                                <input type="number" placeholder='agruegue su Telefono' onChange={(e) => setTelefono(e.target.value)} />
                                <Spacer />
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder='agruegue su email' onChange={(e) => setEmail(e.target.value)} />
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

