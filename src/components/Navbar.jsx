import { useContext} from "react"
import { CartContext } from "../CartContext"
import { UserContext } from "../UserContext"

import { Link } from "react-router-dom"



const Navbar = () => {

const {token, logout} = useContext(UserContext)

const {total} = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      
      <div>
        <Link className="btn btn-outline-light me-2"  to="/"> 🏡Home  
                </Link>

        {token ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/profile"> 👨‍🦱 Profile  
            </Link>
.
            <Link 
            className="btn btn-outline-light" 
            to="/" 
            onClick={logout}>
              🔒 Logout
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/login"> 🔒 Login  

            </Link>

            <Link className="btn btn-outline-light"to="/register"> 🔐 Register 
            </Link>
          </>

         
        )}
      </div>

      <Link className="btn btn-dark btn-outline-light" to="/cart"> 🛒 Carrito
      </Link>

      <button className="btn btn-success">
        💵 Total: ${total}
      </button>

    </nav>
  )
}

export default Navbar