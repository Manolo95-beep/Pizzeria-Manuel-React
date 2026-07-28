import { useState } from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState("");

    const [error, setError] = useState('')

    const [largo, setLargo] = useState('')

    const {login} = useContext(UserContext)

    const navigate = useNavigate();

    

    const validarDatos = async (e) => {
        e.preventDefault();
        if (!email.trim() || !contraseña.trim() ){
            setError(true);
            return
        }
        setError(false);

        if(contraseña.length <6){
            setLargo(true);
            return
        }
        else
            setLargo(false)

        const exito = await login (email,contraseña);

        if (exito){
            alert ("Inicio de sesion correcto")
            navigate ("/profile")
        }
      }

    
      
    

    

  return (
    <>

      <h2> Login </h2>

      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p> Todos los campos son obligatorios</p> : null}
        {largo ? <p> La contraseña debe tener mas de 6 caracteres </p> : null}
            <div className="form-group">
                <label> Email</label>
                <input
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}

                />
            </div>

            <div className="form-group">
                <label> Contraseña</label>
                <input
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setContraseña(e.target.value)}
                value={contraseña}
                />
            </div>

            
            <button 
                type="submit" 
                className="btn btn-primary" 
                > 

                Enviar 
                
            </button>
            

        </form>

    </>
  )}

    
export default Login
