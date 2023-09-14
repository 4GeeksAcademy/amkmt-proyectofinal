import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-warning" to="/">La casita feliz</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-line justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-warning" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/menu">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/locales">Locales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/login">Ingresar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/register">Registrarse</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2