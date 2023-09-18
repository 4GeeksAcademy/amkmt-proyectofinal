import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/registro.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmail(event) {
    setEmail(event.target.value)
  }
  function handlePAssword(event) {
    setPassword(event.target.value)
  }
  async function handleSubmit(event) {
    event.preventDefault()
    //let logged = await actions.login(email, password);
  }
  return (
    <>
      <div className="container">
        <div className="form-content">
          <h1 id="title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="    ">
              <div className="input-field" id="nameInput">
                <i class="fa-regular fa-envelope"></i>
                <input onChange={handleEmail} type="email" placeholder="Email"></input>

              </div>
              <div className="input-field">
                <i class="fa-solid fa-lock"></i>
                <input onChange={handlePAssword} type="texto" placeholder="Password"

                />
              </div>

            </div>
            <div className="btn-field">
              <button className="col-4" id="signIn" type="button"

              >Send</button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};
