import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/administrador.css";

const Administrador = () => {
    return (
        <div className="container">
            <h2>Administrador </h2>
            <div className="container-Button">
                <Link to="/productos">
                    <Button variant="primary" size="lg">
                        Productos
                    </Button>
                </Link>
                <Button variant="primary" size="lg">
                    Reservas
                </Button>
                <Button variant="primary" size="lg">
                    Usuarios
                </Button>
            </div>
        </div>
    );
};

export default Administrador;
