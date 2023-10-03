import { Box, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from './context/CartContext'





const Form = () => {

  

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        telefono === "" ? alert("campo email vacío") : alert(`Registrado con el telefono, ${telefono}`)
        email === "" ? alert("campo telefono vacío") : alert(`Registrado con el email, ${email}`)

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))


    }
    const order = {
        buyer: {
            nombre, email, telefono
        },

        // items: cart.map(({id,nombre,precio}) => {
        
        //     id, nombre, precio
        

    }


// const orden = "orden de compra" + (orden.length +1)
const ordersCollection = collection(db, "orden de compra")
return (
    <>
        <Box borderRadius="8px" backgroundColor="beige" marginTop="50px" marginLeft="500px" marginRight="500px"
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
                <button >Enviar</button>
                <Spacer />
                <h3>Id de tu compra:{orderId}</h3>

            </form>
        </Box>

    </>

)

}



export default Form

