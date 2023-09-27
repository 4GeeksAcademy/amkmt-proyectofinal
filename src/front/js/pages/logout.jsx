import React, { useContext, useState } from "react";
import "../../styles/logout.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

const Logout = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container contenedorlogout">
            <h1 className="titulologout">¿Está seguro que desea cerrar la sesión?</h1>

            {/* <!-- Botón de Logout --> */}
            {/* <Link to="/">
                <button id="volverButton">< i class=" fa-solid fa-house fa-2x"></i></button>
            </Link> */}
            <Link to="/">
                <button id="volverButton">< i class=" fa-solid fa-house fa-2x"></i></button>
            </Link>
            <Link to="/login">
                <button id="logoutButton" onClick={() => actions.logout()}>Cerrar</button>
            </Link>


        </div>
    )
}
export default Logout;