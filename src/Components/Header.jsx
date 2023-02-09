import React from "react";
import { Link } from "react-router-dom";
import LmvLogo from "./Images/LMVIB Main.jpg";
import "./index.css";
const Header = () => {
  return (
    <div>
      <div className="header_header_div">
        <div className="Lmvib_main_logo_div">
          <Link to="/">
            <img src={LmvLogo} alt="LmvLogo" width="201px" height="auto" />
          </Link>
        </div>
        <div>
          <nav>
            <ul className="unordered_list_navbar">
              <li>
                InsuranceProducts
                <select>
                  <option></option>
                </select>
              </li>
              <li>
                Renew Your Policy
                <select>
                  <option></option>
                </select>
              </li>
              <li>
                Claim
                <select>
                  <option></option>
                </select>
              </li>
              <li>
                Support
                <select>
                  <option></option>
                </select>
              </li>
              <li className="signIn_button">
                <button>Sign In</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
