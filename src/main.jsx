import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./CartContext.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';


import { UserProvider } from "./UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <UserProvider>
    <BrowserRouter>
  
      <CartProvider>
        <App />
      </CartProvider>
    
    </BrowserRouter>
  </UserProvider>
);
