import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HealthTemplate from "./Components/Templates/HealthTemplate";
import MotorTemplate from "./Components/Templates/MotorTemplate";
import BikeTemplate from "./Components/Templates/BikeTemplate";
import LifeTemplate from "./Components/Templates/LifeTemplate";
import MoreTemplate from "./Components/Templates/MoreTemplate";
import RenewalTemplate from "./Components/Templates/RenewalTemplate";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/health"} element={<HealthTemplate />} />
        <Route path={"/motor"} element={<MotorTemplate />} />
        <Route path={"/bike"} element={<BikeTemplate />} />
        <Route path={"/life"} element={<LifeTemplate />} />
        <Route path={"/more"} element={<MoreTemplate />} />
        <Route path={"/renewals"} element={<RenewalTemplate />} />
      </Routes>
    </>
  );
};

export default App;
