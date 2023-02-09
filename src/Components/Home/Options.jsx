import React from "react";
import "../index.css";
import HealthLogo from "../Images/Health.png";
import MotorLogo from "../Images/Motor.png";
import BikeLogo from "../Images/bike.png";
import LifeLogo from "../Images/Life.png";
import MoreLogo from "../Images/More.png";
import RenewalLogo from "../Images/renewal.png";
import { Link } from "react-router-dom";
const Options = () => {
  return (
    <div className="Options_mainDiv">
      <div class="d-flex flex-row  mb-1 Options_mainDiv_inside ">
        <div class="p-2  Option_items_bodydiv1 ">
          <Link to="/health">
            <img
              src={HealthLogo}
              alt="Healthlogo"
              width="65px"
              height="50px  "
            />
          </Link>

          <h3>Health</h3>
        </div>
        <div class="p-2 bd-highlight Option_items_bodydiv1 ">
          <Link to="/motor">
            <img
              src={MotorLogo}
              alt="Healthlogo"
              width="65px"
              height="50px  "
            />
          </Link>
          <h3>Motor</h3>
        </div>
        <div class="p-2 bd-highlight Option_items_bodydiv1 ">
          <Link to="/bike">
            <img src={BikeLogo} alt="Healthlogo" width="65px" height="50px  " />
          </Link>
          <h3>Bike</h3>
        </div>
        <div class="p-2 bd-highlight Option_items_bodydiv1 ">
          <Link to="/life">
            <img src={LifeLogo} alt="Healthlogo" width="65px" height="50px  " />
          </Link>
          <h3>Life</h3>
        </div>
        <div class="p-2 bd-highlight Option_items_bodydiv1 ">
          <Link to="/more">
            <img src={MoreLogo} alt="Healthlogo" width="65px" height="50px  " />
          </Link>
          <h3>More</h3>
        </div>
        <div class="p-2 bd-highlight Option_items_bodydiv1 ">
          <Link to="/renewal">
            <img
              src={RenewalLogo}
              alt="Healthlogo"
              width="65px"
              height="50px  "
            />
          </Link>
          <h3>Renewal</h3>
        </div>
      </div>
    </div>
  );
};

export default Options;
