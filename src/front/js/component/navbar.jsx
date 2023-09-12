import React from 'react';

const Navbar2 = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-warning" href="#">La casita feliz</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-line justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-warning" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" href="#">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" href="#">Locales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" href="#">Ingresar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2