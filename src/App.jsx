import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";




function App() {

  return (
    <>
     <Navbar/>

     <Routes>


        <Route path="/" element={<Home />} />

        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
          } />

        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
          
          } />

        <Route path="/cart" element={<Cart />} />

        <Route path="/pizza/:id" element={<Pizza />} />

        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
          } />

        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />


     </Routes>

    </>
  )
}

export default App
