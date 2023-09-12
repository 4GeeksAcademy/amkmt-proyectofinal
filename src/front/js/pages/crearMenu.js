import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import "../../styles/prueba.css";

const CrearMenu = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const { store, actions } = useContext(Context);
const agregarMenu= (event)=> {event.preventDefault();
    setName ("");
    setDescription ("");
    setImage ("");
    setPrice ("");
}

    return (
        <>
            <div className="container">
                <div className="form-content">
                    <h1 id="title">Menu</h1>
                    <form>
                        <div className="    ">
                            <div className="input-field" id="nameInput">
                            <i class="fa-solid fa-utensils"></i>
                                <input type="text" placeholder="Nombre"onChange={
                                        (event) => setName(event.target.value)
                                    }
                                    value={name}/> 
                            </div>
                            <div className="input-field">
                            <i class="fa-regular fa-file-lines"></i>
                                <input type="description" placeholder="descripcion"onChange={
                                        (event) => setDescription(event.target.value)
                                    }
                                    value={description}/>  
                            </div>
                            <div className="input-field">
                            <i class="fa-regular fa-image"></i>
                                <input type="text" placeholder="imagen"onChange={
                                        (event) => setImage(event.target.value)
                                    }
                                    value={image}/>  
                            </div>

                            <div className="input-field" id="nameInput">
                               <i class="fa-solid fa-tag"></i>
                                <input type="text" placeholder="precio" onChange={
                                        (event) => setPrice(event.target.value)
                                    }
                                    value={price}/> 
                            </div>
                        </div>
                        <div className="btn-field">
                            <button className="col-4" id="signIn" type="button" onClick={agregarMenu}>Agregar al Menu</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearMenu;