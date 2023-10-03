import { Box, Spacer } from '@chakra-ui/react'
import { useState } from 'react'





const Form = () => {



    const [nombre, setNombre] = useState("")

    const [email, setEmail] = useState("")

    const [idPurchase, setIdPurchase] = useState(" ")





    const handleSubmit = (e) => {

        e.preventDefault()

        nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)

        email === "" ? alert("campo email vacío") : alert(`Registrado con el email, ${email}`)



        console.log("Información enviada")

    }

    return (

        <>
            <Box

                borderRadius="8px"
                backgroundColor="purple.50"
                marginTop="50px"
                marginLeft="500px"
                marginRight="500px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent=" center"
                fontSize="25px">

                <h1 >Formulario para nuestros clientes </h1>

                <form onSubmit={handleSubmit} >
                    <Spacer />
                    <label htmlFor="nombre">Nombre:</label>

                    <input type="text" placeholder='agruegue su nombre' onChange={(e) => setNombre(e.target.value)} />
                    <Spacer />
                    <label display="block" htmlFor="email">Email:</label>
                    <Spacer />
                    <input type="email" placeholder='agruegue su email' onChange={(e) => setEmail(e.target.value)} />
                    <Spacer />
                    <button >Enviar</button>
                    <Spacer />
                    <h3>Id de tu compra:{idPurchase}</h3>
                    
                </form>
            </Box>

        </>

    )

}



export default Form

