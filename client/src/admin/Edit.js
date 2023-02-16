import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
function Edit() {
    const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.id;
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);
  const [job, setJob] = useState("");
  // effect to fetch user data on component mount
  useEffect(() => {
    axios.get(`http://localhost:4000/editusers/${userId}`).then((res) => {
      setUser(res.data);
    });
  }, [userId]);
  useEffect(() => {
    if (user) {
      setUsername(user.name);
      setEmail(user.email);
      setAge(user.age);
      setPhone(user.phone);
      setJob(user.job);
    }
  }, [user]);
  const changeUserData = async(e) => {
    e.preventDefault()
    const updatedUser = {
      name: username,
      email: email,
      age: age,
      phone: phone,
      job: job,
    };
   await axios
      .put(`http://localhost:4000/changedata/${userId}`, updatedUser)
      .then((res) => {
        if (res.data === "oke") {
          alert("data changes");
          navigate("/adminhome");
        } else {
          alert("error");
        }
        // handle success
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  return (
    <div>
      <h1 className="title">Edit the user here</h1>
      <div className="columns is-centered">
        <div className="column is-half">
          <form onSubmit={changeUserData}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
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
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">job</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter profession"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                />
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
}

export default Edit;
