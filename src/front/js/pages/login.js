import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    async function login() {
      let data = {
        email: email,
        password: password,
      };
      let response = await actions.fetchPromise("/api/login", "POST", data);

      if (response && response.ok) {
        let responseJson = await response.json();

        // Almacena el token en el localStorage
        localStorage.setItem("token", responseJson.token);

        // Almacena los datos del usuario en el localStorage
        localStorage.setItem("user", JSON.stringify(responseJson.user));

        // Verifica si el usuario es administrador
        if (responseJson.user && responseJson.user.admin) {
          navigate("/crearmenu");
        } else {
          navigate("/menu");
        }
      } else {
        // Maneja el caso en el que la respuesta no fue exitosa
        console.error("La solicitud no fue exitosa o la respuesta está vacía.");
      }
    }

    login();
  }

  return (
    <>
      <div className="container">
        <div className="form-content">
          <h1 id="title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="input-field" id="nameInput">
                <i className="fa-regular fa-envelope"></i>
                <input onChange={handleEmail} type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input onChange={handlePassword} type="password" placeholder="Password" />
              </div>
            </div>
            <div className="btn-field">
              <button className="col-4" id="Login" type="submit">
                Login
              </button>
            </div>
            <div className="btn-field">
              <button className="col-4" id="signIn" type="button">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};