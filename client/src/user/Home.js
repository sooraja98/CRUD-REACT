import React from "react";
import { useLocation, Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

function Home() {
  const location = useLocation();
  const data = location.state.id;

  return (
    <div>
      <div class="card">
        <div class="card-image is-centered">
          <figure class="imageis-centered">
            <img
              src={`http://localhost:4000/${data.image}`}
              alt="imaged"
              style={{ width: "30%", height: "400px" }}
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <label class="subtitle is-6">Name</label>
              <p class="subtitle is-4">{data.name}</p>
              <label class="label">Email</label>
              <p class="subtitle is-6">{data.email}</p>
              <label class="label">Job</label>
              <p class="subtitle is-6">{data.job}</p>
              <label class="label">Age</label>
              <p class="subtitle is-6">{data.age}</p>
              <label class="label">Phone number</label>
              <p class="subtitle is-6">{data.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/login" className="button is-primary">
        Logout
      </Link>
    </div>
  );
}

export default Home;
