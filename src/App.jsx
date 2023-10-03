import { BrowserRouter, Routes, Route, } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import Form from "./Form"
import CartContextProvider, { CartContext } from "./context/CartContext"
import CartItem from "./context/CartItem"


const App = () => {
  return (
    <BrowserRouter>
     <CartContextProvider>
      
  
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
       
      </Routes>
      {/* <Form/> */}
      </CartContextProvider>
    </BrowserRouter>
    
   
  )
}

export default App
