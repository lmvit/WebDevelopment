import React from "react";
import "../index.css";
import Question from "../Images/question.png";
const Haveaquestion = () => {
  return (
    <div className="Have_a_question_MainDiv">
      <div className="d-flex flex-row Have_a_question_inside">
        <div className="Have_a_question_inside_1 d-flex flex-column ">
          <div>
            <h3 className="Font_Common">
              Have a question ?<br />
              Here to help
            </h3>

            <br></br>
          </div>
          <div className="Font_Common_content">
            Our Friendly customer support team is your <br />
            extended family.Speak your heart out.They
            <br />
            listenwith undivided attention to resolve your
            <br />
            concerns.Give us a call request a callback or
            <br />
            drop us an email,We're here to help.
          </div>

          <div className="General_Enquires">
            General Enquires <br></br>
            <div className="url">www.lmvgroup.com</div>
          </div>

          <div className="General_Enquires">
            Contact-Info <br></br>
            <div className="url">040-4006-0770</div>
          </div>
        </div>
        <div>
          <img src={Question} width="450px" className="Question_img" />
        </div>
      </div>
    </div>
  );
};

export default Haveaquestion;
