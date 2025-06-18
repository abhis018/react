import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
        <div className='logo-container'>
          <img className="logo" alt="logo" src={LOGO_URL}></img>
        </div>
        <div className='nav-container'>
          <ul>
            <li><strong>Home</strong></li>
            <li><strong>About Us</strong></li>
            <li><strong>Contact Us</strong></li>
            <li><strong>Cart</strong></li>
            <button className="btn login" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
  )
};

export default Header;