import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "../design/navbar.css"


const Navbar = () => {
  return (
    <div className="flex   justify-between items-center h-20 max-w-auto">
      <div className="w-16 ml-24">
        <img
          src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
          alt="olnl"
        />
      </div>
      <div className="flex gap-4 mr-24 items-center font-medium text-slate-100">
        <NavLink to="/">
          <u className="text-slate-100">Home</u>
        </NavLink>
        <NavLink to="/cart">
          {" "}
          <div className="text-slate-100">
            <FaCartPlus />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
