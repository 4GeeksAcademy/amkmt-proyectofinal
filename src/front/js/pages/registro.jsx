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
        console.log("me ejecuto");

        // Sección de verificación
        if (password === "" || email === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor llene ambos campos!",
                timer: 3500,


            });

        } else {
            Swal.fire({

                icon: "success",
                title: "Usuario registrado",
                timer: 1500,
            });
        }

        // Sección para enviar la data al backend
        const response = await actions.register(email, password);

        if (response && response.status === 200) { // Verificar el estado de la respuesta
            const responseJson = await response.json();
            Swal.fire({
                position: "center",
                icon: "success",
                title: responseJson.message,
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            const responseJson = await response.json();
            console.log(responseJson);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al registrar!",
                timer: 3500,
            });
        }
    };

    return (
        <>
            <div className="container contenedor">
                <div className="form-content">
                    <h1 id="title">Registro</h1>
                    <form>
                        <div className="input-field" id="nameInput">
                            {/* <i className="fa-solid fa-user"></i> */}
                            <input className="losinput" type="text" placeholder="Nombre" />
                        </div>
                        <div className="input-field">
                            {/* <i className="fa-solid fa-envelope"></i> */}
                            <input
                                className="losinput"
                                type="email"
                                placeholder="Correo"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-field">
                            {/* <i className="fa-solid fa-lock"></i> */}
                            <input
                                className="losinput"
                                type="password"
                                placeholder="Contraseña"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        <div className="input-field" id="nameInput">
                            {/* <i class="fa-solid fa-house"></i> */}
                            <input className="losinput" type="text" placeholder="Dirección" />
                        </div>
                        <div className="input-field" id="nameInput">
                            {/* <i class="fa-solid fa-phone"></i> */}
                            <input className="losinput" type="text" placeholder="Teléfono" />
                        </div>

                        <div className="btn-field">
                            <button className="col-4" id="signUp" type="button" onClick={() => register()}>
                                Sign Up
                            </button>

                            <Link to="/login">
                                <button className="col-4 disable" id="signInn" type="button" >
                                    Login
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;