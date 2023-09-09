import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">StartBootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-line justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Locales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "href="#">Ingresar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar