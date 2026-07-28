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


    const pagar = async () => {
      try {

        const response = await fetch ("http://localhost:5000/api/checkouts", {

          method:"POST",

          headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            cart
          })

        });

        const data = await response.json();

        if (!response.ok){
          throw new Error(data.error || "Error al realizar la compra")
        }

        alert("Compra realizada con exito")

      } catch(error){

        console.error(error)
        alert(error.message)

      }
    }
    
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


      <button 
      className="btn btn-dark" 
      disabled={!token}
      onClick={pagar}> 
      

      Pagar 

      </button>
      <h3> Total: {total }</h3>

    </>
  )
}

export default Cart
