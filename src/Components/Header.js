import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Log In");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center border-b-2 border-black">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center mr-5 text-xl font-semibold">
        <ul className="flex gap-10">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            Cart<i class="fa-solid fa-cart-shopping"></i>
          </li>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-slate-900 text-white pb-2 hover:bg-slate-800"
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
