import React from "react";
import Header from "../Header";
import HealthTemplateBody from "../TemplateBody/HealthTemplateBody";
import Footer from "../Footer"
const HealthTemplate = () => {
  return (
    <div>
      <Header />
      <HealthTemplateBody/>
      <Footer/>
    </div>
  );
};

export default HealthTemplate;
