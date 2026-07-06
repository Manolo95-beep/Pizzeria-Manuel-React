import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext";
import { CartContext } from "../CartContext";

import { useParams } from "react-router-dom";

const Pizza = () => {

    const [pizza,setPizza] = useState(null);

    const {addToCart} = useContext(CartContext);

    const {id } = useParams();
    

    useEffect (() =>{
        const getPizza = async () => {
            const response = await fetch (`http://localhost:5000/api/pizzas/${id}`)
            const data = await response.json();

            setPizza(data);
        };
        getPizza();
    }, [id]);

         if (!pizza) {
             return <h2>Cargando...</h2>;
}

  return (
    <div className="container mt-5">

        <img
            src={pizza.img}
            alt={pizza.name}
            width="500"
        />

        <h2>{pizza.name}</h2>

        <p>{pizza.desc}</p>

        <h4>Ingredientes:</h4>

        <ul>
            {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
      ))}
        </ul>

        <h3>
            Precio: ${pizza.price}
        </h3>

        <button onClick={() => addToCart(pizza)}>
            Añadir al carrito 🛒
        </button>

        </div>
  )
}

export default Pizza