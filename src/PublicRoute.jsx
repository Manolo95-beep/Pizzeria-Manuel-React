import { Navigate } from "react-router-dom"
import { UserContext } from "./UserContext"
import { useContext } from "react"

const PublicRoute = ({children}) => {

    const {token} = useContext(UserContext)

    if (token){
        return <Navigate to="/"/>
    }
  return children
  
}

export default PublicRoute