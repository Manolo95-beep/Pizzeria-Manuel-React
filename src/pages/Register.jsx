import {useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";


const Register = () => {
    
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState("");
    const [confirmarcontraseña, setConfirmarcontraseña] = useState("");

    const [error, setError] = useState('')

    const [largo, setLargo] = useState('')

    const [iguales, setIguales] =useState('')

    const {register} = useContext(UserContext)
    const navigate = useNavigate();

    const validarDatos = async (e) => {

        e.preventDefault();
        if (!email.trim() || !contraseña.trim() || !confirmarcontraseña.trim()){
            setError(true);
            return
        }
        else
        setError(false);

        if(contraseña.length <6){
            setLargo(true);
            return
        }
        else
            setLargo(false)

        if(contraseña !== confirmarcontraseña){
            setIguales(true);
            return

        }
        else
            setIguales(false)

        
        const exito = await register (email, contraseña);

        if (exito) {
            alert ("Usuario registrado correctamente");
            navigate("/profile");
        }
    }

        
    

    return(
    <>

        <h2> Register  </h2>
        
        <form className="formulario" onSubmit={validarDatos}>

        {error ? <p> Todos los campos son obligatorios</p> : null}
        {largo ? <p> La contraseña debe tener mas de 6 caracteres </p> : null}
        {iguales ? <p> Las contraseñas ingresadas deben ser iguales </p> : null}
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
                type="password"
                name="email"
                className="form-control"
                onChange={(e) => setContraseña(e.target.value)}
                value={contraseña}
                />
            </div>

            <div className="form-group">
                <label> Confirmar contraseña</label>
                <input
                type="password"
                name="email"
                className="form-control"
                onChange={(e) => setConfirmarcontraseña(e.target.value)}
                value={confirmarcontraseña}
                />
            </div>
            <button 
            type="submit" 
            className="btn btn-primary"> 
            Enviar 
            </button>
            

        </form>
    </>
      
    
  
    )
}

    

export default Register
