import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./user/Register";
import Login from "./user/Login";
import Home from "./user/Home";

import Admin from "./admin/Admin";
import Adminhome from "./admin/Adminhome";
import Adduser from "./admin/Adduser";
import Edit from "./admin/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminhome" element={<Adminhome/>} />
        <Route path="/adduser" element={<Adduser/>} />
        <Route path="/edituser" element={<Edit/>} />



      </Routes>
    </div>
  );
}

export default App;
