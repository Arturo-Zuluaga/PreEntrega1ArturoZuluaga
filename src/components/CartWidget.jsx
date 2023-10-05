
import { Divider, Flex, Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const { productosTotales } = useContext(CartContext)
    const total = productosTotales()

    return (
        <div>
            <Flex>
                <Box>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>

                </Box>
                <Divider />
                <Box>
                    <p>{total > 0 ? total : ""}</p>

                </Box>

            </Flex>
        </div>
    )
}

export default CartWidget

// 