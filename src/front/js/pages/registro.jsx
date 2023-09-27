import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/registro.css";
const initialState = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: ""
}
const Register = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(initialState)
    let navigate = useNavigate()
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const register = async () => {
        // Sección de verificación
        if (user.password.trim() === "" || user.email.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor llene ambos campos!",
                timer: 3500,
            })
        }
        let response = await actions.register(user)
        // Sección para enviar la data al backend
        if (response == 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User register success",
                showConfirmButton: false,
                timer: 1500,
            }).then((result) => {
                if (result.isDismissed) {
                    navigate("/login")
                }
            })
        } else {
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
                            <input
                                className="losinput"
                                type="text"
                                placeholder="Nombre"
                                value={user.name}
                                name="name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field">
                            {/* <i className="fa-solid fa-envelope"></i> */}
                            <input
                                className="losinput"
                                type="email"
                                placeholder="Correo"
                                onChange={handleChange}
                                value={user.email}
                                name="email"
                            />
                        </div>
                        <div className="input-field">
                            {/* <i className="fa-solid fa-lock"></i> */}
                            <input
                                className="losinput"
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field" id="nameInput">
                            {/* <i class="fa-solid fa-house"></i> */}
                            <input
                                className="losinput"
                                type="text"
                                placeholder="Dirección"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field" id="nameInput">
                            {/* <i class="fa-solid fa-phone"></i> */}
                            <input
                                className="losinput"
                                type="text"
                                placeholder="Teléfono"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                            />
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