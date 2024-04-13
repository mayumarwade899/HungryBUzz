import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Log In");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login_btn"
            onClick={() => {
              btnLogin === "Log In"
                ? setBtnLogin("Logout")
                : setBtnLogin("Log In");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
