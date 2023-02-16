import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate, Link } from "react-router-dom";
function Adminhome() {
  const [users, setUsers] = useState([]);
  const naviagate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    alert("are u sure");
    axios.delete(`http://localhost:4000/users/${id}`).then((response) => {
      // Remove the deleted user from the state
      setUsers(users.filter((user) => user._id !== id));
    });
  };
  const handleEdit = (id) => {
        naviagate('/edituser',{state:{id:id}})
  };


  return (
    <div>
      <h1 className="title">Admin home page</h1>
   
      <Link to="/adduser" className="button is-primary is-pulled-right">
        Add user
      </Link>
      <table className="table is-bordered is-striped is-fullwidth  ">
        <tr>
          <th className="has-text-centered">Name</th>
          <th className="has-text-centered">Email</th>
          <th className="has-text-centered" >Role</th>
          <th className="has-text-centered">phone</th>
          <th className="has-text-centered">age</th>

          <th className="has-text-centered">Edit</th>
          <th className="has-text-centered">Delete</th>

        </tr>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="has-text-centered">{user.name}</td>
              <td className="has-text-centered">{user.email}</td>
              <td className="has-text-centered">{user.job}</td>
              <td className="has-text-centered">{user.phone}</td>

              <td className="has-text-centered">{user.age}</td>
               <td> <div class="buttons has-text-centered">
                  <button class="button is-small is-warning" onClick={() => handleEdit(user._id)}>
                    <i class="fas fa-edit"></i>
                  </button></div></td> 
              <td>
               <div>
                  <button
                    class="button is-small is-danger has-text-centered "
                    onClick={() => handleDelete(user._id)}
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin" className="button is-danger is-pulled-center">
      Logout
      </Link>
    </div>
  );
}

export default Adminhome;
