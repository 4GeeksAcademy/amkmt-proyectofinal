import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Home from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login.js";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Register from "./pages/registro.jsx";
import MenuPage from "./pages/menupage.jsx";




//create your first component
const Prueba = () => {
    return (
        <>
            <div className="row cartas">
                <MenuPage />
            </div>

            <div className="container-fluid">
                <Register />
            </div>
        </>
    );
};

export default Prueba;
