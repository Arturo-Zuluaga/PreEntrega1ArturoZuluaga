import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Spacer,
  
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
    <div>
        <Flex>
            <Box p='4' >
                
                <h3> joyeria La realeza</h3>
            </Box>
                <Spacer />
            <Box p='4' >
                <Menu>
                    <MenuButton>
                     Categories
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Category A</MenuItem>
                     <MenuItem>Category B</MenuItem>
                    <MenuItem>Category C</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            
            <Box p="4">
                <CartWidget/>
      
            </Box>
           
        
        </Flex>
    
    </div>
  )
}

export default Navbar