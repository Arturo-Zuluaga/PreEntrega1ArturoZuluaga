import React from 'react'
import Form from '../Form'

const cart =[2]

const Cart = () => {
  return (
    <div>

      {cart.length >0?
      <Form/>
      :
      <button> Regresa a la pantalla principal </button>
}
    </div>
      
  )
}

export default Cart