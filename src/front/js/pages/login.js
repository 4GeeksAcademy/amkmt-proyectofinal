import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

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

    <div className="container mt-5">
      <div className="card ">
        <div className="card-header">
          Login
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" placeholder="email" aria-describedby="emailHelp" />

              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onChange={handlePAssword}
                type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="card-footer text-muted">

        </div>
      </div>
    </div>
  );
};
