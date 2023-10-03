import { calcLength } from "framer-motion";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const enCart = (id) => {
    return cart.find (producto => producto.id === id) ? true : false
  }

  const quitarDelCart = (id) => setCart(cart.filter(producto => producto.id !== id))

  const agregarAlCart = (item, quantity) => {
    if(enCart(item.id)){
      setCart(cart.map(producto => {return producto.id === item.id ? {...producto, quantity: producto.quantity + quantity} : producto}))
    }else{
        setCart([...cart, {...item, quantity}])
    }
  }



const precioTotal = () => {
  return cart.reduce ((prev, act) => prev + act.quantity * act.precio, 0)
}

const productosTotales = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)


console.log('carrito', cart);

  return (
    <CartContext.Provider value={{clearCart, enCart, quitarDelCart, agregarAlCart, precioTotal, productosTotales, cart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

// import {useState,createContext} from 'react'

// export const CartContext = createContext({
//   cart:[]
// })

// export const CartProvider = ({children}) => {

//     const [cart, setCart] =useState([])
    
//     console.log(cart)

//     const addItem = (item,quatity) => {
//       if(!isInCart(item.id)){
//         setCart(prev =>[...prev, {...item, quatity}])
//       } else {console.log("El producto ya fue agregado")
//       }
//     }

//     const removeItem = (itemId) =>{
//       const cartUpdated = cart.filter(prod => prod.id !== itemId)
//       setCart(cartUpdated)
      
//     }

//     const clearCart = () =>{
//       setCart([])
//     }

//     const isInCart = (itemId) =>{
//       return cart.some(prod => prod.id === itemId)
//     }

   
//   return (
//     <CartContext.Provider value={{cart,addItem, removeItem, clearCart}}>
        
//         {children}

//     </CartContext.Provider>
//   )

//   }
    






// export default CartProvider