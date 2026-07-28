import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");



    const login = async(email,password) => {

        try{

            const response = await fetch("http://localhost:5000/api/auth/login", {

                method: "POST",

                headers: {
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            
        });

        const data = await response.json();

        if (!response.ok){
            throw new Error (data.error || "Error al inicar sesion")
        }

        setToken(data.token);
        setEmail(data.email);

        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        return true;
    
    
        }catch (error) {

        console.error(error);
        alert(error.message);

         return false;

        }

    }

    const register = async(email,password) => {

        try{

            const response = await fetch("http://localhost:5000/api/auth/register", {

                method: "POST",

                headers: {
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            
        });

        const data = await response.json();

        if (!response.ok){
            throw new Error (data.error || "Error al registrarse")
        }

        setToken(data.token);
        setEmail(data.email);

        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        return true;
    
    
        }catch (error) {

        console.error(error);
        alert(error.message);

         return false;

        }

    }




    const logout = () => {

        setToken("")
        setEmail("")

        localStorage.removeItem("token")
        localStorage.removeItem("email")

    }

    const getProfile = async ()=>{

    }


    
  return (
    <UserContext.Provider
        value={{
            token,
            email,
            login,
            register,
            logout,
            getProfile
        }}
        >
            {children}
    </UserContext.Provider>

)
}

