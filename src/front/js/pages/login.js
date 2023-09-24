import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

// import "../../styles/registro.css";
import { useNavigate } from "react-router-dom"
import "../../styles/registro.css";


export const Login = () => {

  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
let navigate= useNavigate("")

  function handleEmail(event) {
    s
    setEmail(event.target.value)
  }
  function handlePAssword(event) {
    setPassword(event.target.value)
  }
  async function handleSubmit(event) {
    event.preventDefault()
    //let logged = await actions.login(email, password);
  }
  async function login() {
    let data = {
      email: email,
      password: password,
    }
    let response= await actions.fetchPromise("/api/login","POST", data)

    if (response.ok) {
     let responseJson= await response.json() 
     localStorage.setItem("token",responseJson.token )
     navigate("/menu")
    }
  }
  return (
    <>
      <div className="container">
        <div className="form-content">
          <h1 id="title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="    ">
              <div className="input-field" id="nameInput">
                <i className="fa-regular fa-envelope"></i>
                <input onChange={handleEmail} type="email" placeholder="Email"></input>

              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input onChange={handlePAssword} type="texto" placeholder="Password"

                />
              </div>

            </div>
            <div className="btn-field">
              <button className="col-4" id="Login" type="button"
                onClick={login}
              >Login</button>
            </div>
            <div className="btn-field">
              <button className="col-4" id="signIn" type="button"

              >Registrarse</button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};
