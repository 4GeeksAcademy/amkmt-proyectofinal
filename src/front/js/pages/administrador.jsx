import React, {useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import {Context  } from "../store/appContext";

const Administrador = () =>{
 const {store} =useContext(Context)
 const navigate= useNavigate()
    return (
        
            <>
            {store.current_user?.admin ?
          <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Link to = "/productos">
                    productos
                    </Link>
                </div>
            </div>
        </div>:navigate("/login")

        }
            </>
        
        
    )
}

export default Administrador 