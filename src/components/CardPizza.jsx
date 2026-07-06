import { useContext } from "react"
import { CartContext } from "../CartContext"

import Pizza from "../pages/Pizza"

import { Link } from "react-router-dom"


const CardPizza = ({pizza}) => {

    const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />

      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>

        <hr />

        <p className="text-center">
          {pizza.desc}
        </p>

        <hr/>

        <p className="text-center">
          Ingredientes:
        </p>

        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <hr />

        <h4 className="text-center">
          ${pizza.price.toLocaleString('es-CL')}
        </h4>

        <div className="d-flex justify-content-between">

          <Link to={`/pizza/${pizza.id}`}>

            <button className="btn btn-outline-dark">
            👀 Ver más
          </button>  
          
          </Link>
          

          <button 
            className = "btn btn-dark"
            onClick = {() => addToCart(pizza)}>
            🛒 Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza