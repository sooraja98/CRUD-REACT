import React, { useRef } from "react";
import "bulma/css/bulma.min.css";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const passwordRef = useRef();
  const handleAdmin = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const name1 = "admin@gmail.com";
    const password1 = "pass";
    if (name === name1 && password === password1) {
      navigate("/adminhome");
    } else {
      alert("you are not the admin");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <h1 className="title is-4">Admin Login</h1>
              <form onSubmit={handleAdmin}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" type="text" ref={nameRef} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      ref={passwordRef}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
