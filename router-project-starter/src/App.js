import "./App.css";
import Nav from"./components/Nav.js";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Logout from "./pages/Logout";


function App() {
  const [logedin,setlogedin]=useState(true);

  return(<div> 
    <Nav logedin={logedin} setlogedin={setlogedin}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<Logout/>}></Route>
    </Routes>
  </div>);
  
}

export default App;
