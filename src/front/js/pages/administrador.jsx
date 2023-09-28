import React from "react"
import {Link} from "react-router-dom"


const Administrador = () =>{
 
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Link to = "/productos">
                    productos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Administrador 