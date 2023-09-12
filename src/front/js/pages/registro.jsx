import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/registro.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);

    const register = async () => {
        //Sección de verificación
        if (password == "" || email == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor llene ambos campos!",
                /* footer: '<a href="">Why do I have this issue?</a>' */
                timer: 3500,
            });
            return;
        }

        //Sección para enviar la data al backend
        let obj = {
            email: email,
            password: password,
        };

        let response = await actions.fetchPromise("/api/signup", "POST", obj);

        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
            Swal.fire({
                position: "center",
                icon: "success",
                title: responseJson.message,
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            let responseJson = await response.json();
            console.log(responseJson);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al registrar!",
                /* footer: '<a href="">Why do I have this issue?</a>' */
                timer: 3500,
            });
        }
        return;
    };
    return (
        <>
            <div className="container contenedor">
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
                                <input type="email" placeholder="Correo" onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />

                            </div>
                            <div className="input-field">
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" placeholder="Contraseña" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
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

                            <button className="col-4" id="signUp" type="button" onClick={register}>Sign Up!</button>

                            <Link to="/login">
                                <button className="col-4" id="signIn" type="button" class="disable">Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;