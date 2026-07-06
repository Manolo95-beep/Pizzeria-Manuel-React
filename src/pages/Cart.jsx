import { useContext} from "react"
import { CartContext } from "../CartContext"
import { useState } from "react"

import { UserContext } from "../UserContext"



const Cart = () => {
    
    const {
        cart,
        addToCart,
        removeFromCart,
        total
            } = useContext(CartContext);

    const {token} = useContext(UserContext);
    
  return (
    <>

    <h1> Carrito de compras </h1>
      {
        cart.map((pizza) =>
            <div 
            key={pizza.id}
            style={{
                display:"flex",
                alignItems:"center",
                gap:"20px",
                marginBottom:"20px",
                borderBottom:"1px solid gray",
                paddingBottom:"10px"
            }}>

                <img 
                src = {pizza.img} 
                alt={pizza.name} 
                width="100"/>

                <h3>{pizza.name}</h3>

                <p> Precio: ${pizza.price}</p>

                <p> Cantidad: {pizza.cantidad}</p>

                <button className="btn btn-dark" onClick={() => addToCart(pizza)}> + </button>

                <button className="btn btn-dark" onClick={() => removeFromCart(pizza.id)}> - </button>

                 

            </div>
           

        
        
        )
      }


      <button className="btn btn-dark" disabled={!token}> Pagar </button>
      <h3> Total: {total }</h3>

    </>
  )
}

export default Cart
