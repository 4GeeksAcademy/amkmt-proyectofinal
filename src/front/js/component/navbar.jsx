import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import { Context } from "../store/appContext"


const Navbar2 = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className=" container-fluid navbar navbar-dark navbar-expand colornavbar transition">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="navbar-logo-img" src={Logo} /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-line justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active  colorenlace  " aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/especialidades">Especiales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  colorenlace " to="/menu">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/reservation">Reservar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  colorenlace " to="/login">Ingresar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  colorenlace " to="/register">Registrarse</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  colorenlace " to="/contacto">Contáctanos</Link>
                        </li>
                        {/* {!store?.current_user && */}
                        <>
                            <li className="nav-item">
                                <Link className="nav-link  colorenlace " to="/login">Ingresar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  colorenlace " to="/register">Registrarse</Link>
                            </li>
                            <div class="dropdown dropdowncerrar">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul class="dropdown-menu">
                                    <li className="nav-item botonsalir">
                                        <Link className="nav-link colorenlace" to="/logout">Salir</Link>
                                    </li>

                                </ul>
                            </div>
                        </>
                        {/* } */}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2