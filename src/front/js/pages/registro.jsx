import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import "../../styles/prueba.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);


    return (
        <>
            <div className="container">
                <div className="form-content">
                    <h1 id="title">Registro</h1>
                    <form>
                        <div className="    ">
                            <div className="input-field" id="nameInput">
                                <i className="fa-solid fa-user"></i>
                                <input type="text" placeholder="Nombre" />
                            </div>
                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input type="email" placeholder="Correo" />
                            </div>
                            <div className="input-field">
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" placeholder="Contraseña" />
                            </div>

                            <div className="input-field" id="nameInput">
                                <i class="fa-solid fa-house"></i>
                                <input type="text" placeholder="Dirección" />
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

export default Register;