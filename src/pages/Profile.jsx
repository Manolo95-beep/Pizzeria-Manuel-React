import { useContext, useEffect } from "react"
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom"



const Profile = () => {

  const {email,logout,getProfile} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile()
  }, []
  )

  const cerrarSesion = () => {

    logout();
    navigate("/")

  }
  return (

    <div>
        <h1> Perfil </h1>

        <p> <strong> Email : </strong> {email }</p>

        <button
          className="btn btn-danger"
          onClick={cerrarSesion}
        >
           Cerrar sesión 
           </button>
    </div>
  )
}

export default Profile
