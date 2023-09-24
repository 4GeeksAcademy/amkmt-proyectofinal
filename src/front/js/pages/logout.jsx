import React, { useContext, useState } from "react";
import "../../styles/logout.css";
import { Link } from "react-router-dom";

const Logout = () => {
    
    return (
        <div className="container contenedorlogout">
            <h1 className="titulologout">¿Está seguro que desea cerrar la sesión?</h1>

            {/* <!-- Botón de Logout --> */}
            <Link to="/">
                <button id="volverButton">< i class=" fa-solid fa-house fa-2x"></i></button>
            </Link>
            <button id="logoutButton" onClick={() => logout()}>Cerrar</button>
           
        
        </div>
    )
}
export default Logout;