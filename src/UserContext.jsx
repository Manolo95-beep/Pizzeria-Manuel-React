import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");

    const login = async(email,password) =>{

    }

    const register = async(email,password) =>{
        
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
