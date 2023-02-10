import React from "react";
import HealthTemplateLogo from "../Images/HealthTemplate1.png";
import Adult from "../Images/unnamed.png";
import "../index.css";

const HealthTemplateBody = () => {
  return (
    <div>
      <div className="healthtemplate_main">
        <div className="healthtemplate_inside">
          <div className="healthtemplate_inside_image">
            <img
              src={HealthTemplateLogo}
              alt="healthTemplate"
              width="700px"
              height="auto"
            />
          </div>
        </div>
        <div className="healthtemplate_inside">
          <div className="healthtemplate_inside_image">
            <h1 className="HealthImsurance_HT">Health Insurance</h1>
            <br />
            <h3>Compare And buy Health Insurance </h3>
            <br></br>
            <p>Add Members</p>
            <br></br>
            <div class="input-group mb-3 input_data_fields">
              <div class="input-group-prepend">
                <div class="input-group-prepend">
                  <img src={Adult} alt="Adult"></img>
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <button class="btn btn-primary " type="button">
                -
              </button>
              <input className="InputField" value="0"></input>
              <button class="btn btn-primary" type="button">
                +
              </button>
            </div>
            <br></br>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <img src={Adult} alt="Adult"></img>
              </div>
              <select>
                <options></options>
              </select>
              <input
                type=""
                class="form-control"
                aria-describedby="basic-addon1"
              />
              <button class="btn btn-primary" type="button">
                -
              </button>
              <input className="InputField" value="0"></input>
              <button class="btn btn-primary" type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center message_tag_ht_after">
        Health Insurances And its types<br></br>
        <p className="text-start message_tag_ht_after_subheading">
          health Insurance health Insurance health Insurance health Insurance
          health Insurance health Insurancehealth Insurance health Insurance
          health Insurance health Insurance
        </p>
      </h3>
      <div>
        <div className="Selections_Htpage_after_Input">
          <div className="Selections_Htpage_after_Input_insidediv1 ">
            <img src={Adult} alt="logo" />
            <h6>Individual Health Insurance</h6>
          </div>
          <div className="Selections_Htpage_after_Input_insidediv1 ">
            <img src={Adult} alt="logo" />
            <h6>Individual Health Insurance</h6>
          </div>
          <div className="Selections_Htpage_after_Input_insidediv1 ">
            <img src={Adult} alt="logo" />
            <h6>Individual Health Insurance</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTemplateBody;
