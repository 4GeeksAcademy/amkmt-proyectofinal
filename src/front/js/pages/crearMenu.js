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
const agregarMenu= (event)=> {event.preventDefault()}

    return (
        <>
            <div className="container">
                <div className="form-content">
                    <h1 id="title">Menu</h1>
                    <form>
                        <div className="    ">
                            <div className="input-field" id="nameInput">
                                <i className="fa-solid fa-user"></i>
                                <input type="text" placeholder="Nombre" />
                            </div>
                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input type="description" placeholder="descripcion" />
                            </div>
                            <div className="input-field">
                                <i className="fa-solid fa-lock"></i>
                                <input type="image" placeholder="imagen" />
                            </div>

                            <div className="input-field" id="nameInput">
                                <i class="fa-solid fa-house"></i>
                                <input type="text" placeholder="precio" />
                            </div>
                            <div className="input-field" id="telInput">
                                <i class="fa-solid fa-phone"></i>                                <input type="number" placeholder="Teléfono" />
                            </div>
                            <p> Olvidaste tu contraseña <a href="#">Click aquí</a></p>
                        </div>
                        <div className="btn-field">
                            <button className="col-4" id="signUp" type="button">Registro</button>
                            <button className="col-4" id="signIn" type="button" class="disable">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearMenu;