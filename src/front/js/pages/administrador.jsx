import React from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "../../styles/administrador.css"


  

const Administrador = () =>{
 
    return (
        <div className="container-Button">
            <h2>Administrador </h2>
                <div className="Button">
                    <Link to = "/productos">
                        <Button variant="primary" size="lg">
                         Productos
                         </Button>
                    </Link>
                </div>
        </div>
    )
}

export default Administrador 