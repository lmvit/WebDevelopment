import React from "react";
import Header from "./Header";
import Body from "./Home/Body";
import Footer from "./Footer";
const linksArray = ["Products", "Renew Policy", "Claim Policy", "Support"];

const Home = () => {
  return (
    <div>
      <Header links={linksArray} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
