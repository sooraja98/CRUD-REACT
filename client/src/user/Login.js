import React, { useRef } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    await axios.post("http://localhost:4000/login", data).then((res) => {
      if (res.data.status === "registered") {
        const data = res.data.user;
        navigate("/home", { state: { id: data } });
      } else {
        alert("you cant login");
      }
    });
  };
  return (
    <div>
      <h1 className="title">Login Here</h1>

      <div className="columns is-centered">
        <div className="column is-half">
          <form onSubmit={loginUser}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter username"
                  required
                  ref={emailRef}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  required
                  placeholder="Enter password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
