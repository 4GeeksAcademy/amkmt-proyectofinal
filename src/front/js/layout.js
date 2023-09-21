import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login.js";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Register from "./pages/registro.jsx";
import CrearMenu from "./pages/crearMenu";
import MenuPage from "./pages/menupage.jsx";
import Reservation from "./pages/reservation.jsx";
import PaymentForm from "./pages/pago.jsx";

import Navbar2 from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import Menu from "./pages/menu";





//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar2 />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<CrearMenu />} path="/crearMenu" />
                        <Route element={<MenuPage />} path="/especialidades" />
                        <Route element={<Reservation />} path="/reservation" />
                        <Route element={<PaymentForm />} path="/pago" />

                        <Route element={<Menu />} path="/menu" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    {/* <Footer /> */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
