import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';

function Nav(props) {
  const logedin=props.logedin;
  const setlogedin=props.setlogedin;
  return (
    <div className="flex gap-3 justify-evenly">
      <Link to="/">
        <img src={logo} alt="notvisible" />
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          
        </ul>
      </nav>
      <div className="flex gap-6">
        {!logedin&&
          <Link to="/login">
          <button>login</button>
        </Link>}
        { !logedin&&
          <Link to="/signup">
          <button>signup</button>
        </Link>}
        {logedin&&
          <Link to="/dashboard">
          <button>dashboard</button>
        </Link>}
        {
          logedin&&
          <Link to="/logout">
            <button onClick={()=>{
              setlogedin(false)
              toast.success("logged out")
            }}>logout</button>
          </Link>

        }
      </div>
    </div>
  );
}

export default Nav