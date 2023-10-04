
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/administrador.css";

const Administrador = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Administrador <i class="fa-solid fa-user-gear"></i></h2>
                    <div className="container-button ">
                        <Link className="btn btn-product" variant="primary" size="lg" to="/productos">

                            Productos

                        </Link>
                        <Link className="btn btn-product" variant="primary" size="lg" to="/reservasadmin">
                            Reservas
                        </Link>
                        <Link className="btn btn-product" variant="primary" size="lg" to="/">
                            Usuarios
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Administrador;
