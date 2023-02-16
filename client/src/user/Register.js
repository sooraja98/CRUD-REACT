import React, { useRef } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const jobRef = useRef();
  const phoneRef = useRef();
  const picRef = useRef();

  const handleUser = async (e) => {
    e.preventDefault();

    if (nameRef.current.value < 3) {
      alert("name numst be 3 latter");
    } else if (passwordRef.current.value < 3) {
      alert("the password must be more than 3 letters");
    } else if (ageRef.current.value < 0) {
      alert("age not set to zero ");
    } else {
      const formData = new FormData();
      formData.append("name", nameRef.current.value);
      formData.append("email", emailRef.current.value);
      formData.append("password", passwordRef.current.value);
      formData.append("age", ageRef.current.value);
      formData.append("phone", phoneRef.current.value);
      formData.append("job", jobRef.current.value);
      formData.append("pic", picRef.current.files[0]);
      await axios
        .post("http://localhost:4000/register", formData)
        .then((res) => {
          if (res.data === "registered") {
            alert("now you are a memeber");
            navigate("/login");
          } else {
            console.log("error");
          }
        });
    }
  };
  return (
    <div>
      <h1 className="title">Register Here</h1>
      <div className="columns is-centered">
        <div className="column is-half">
          <form onSubmit={handleUser}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter username"
                  required
                  ref={nameRef}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter email"
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
                  placeholder="Enter password"
                  required
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter age"
                  required
                  ref={ageRef}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">phone</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter phone number"
                  required
                  ref={phoneRef}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">job</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  required
                  placeholder="Enter profession"
                  ref={jobRef}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Upload Image</label>
              <div className="control">
                <div className="file has-name is-fullwidth">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="pic"
                      required
                      ref={picRef}
                      accept="image/*"
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-link">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
