import React from "react";
import Slider from "react-slick";
import knowmore from "../Images/knowmore.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="Slider">
      <div className="Carousel_inside d-flex">
        <img src={knowmore} alt="knowmore" width="450px" height="auto" />

        <div className="d-flex flex-column carousel_message">
          <p>
            "Insurance is not a luxury, <br></br>it's a necessity."
          </p>
          <h3>Find The Best policy Here!</h3>
          <button className="btn btn-primary btn-Knowmore">Know More</button>
        </div>
      </div>
      {/* carousel 2 */}
      <div className="Carousel_inside d-flex">
        <img src={knowmore} alt="knowmore" width="450px" height="auto" />

        <div className="d-flex flex-column carousel_message">
          <p>
            "Insurance is not a luxury, <br></br>it's a necessity."
          </p>
          <h3>Find The Best policy Here!</h3>
          <button className="btn btn-primary btn-Knowmore">Know More</button>
        </div>
      </div>
      {/* Carousel 3 */}
      <div className="Carousel_inside d-flex">
        <img src={knowmore} alt="knowmore" width="450px" height="auto" />

        <div className="d-flex flex-column carousel_message">
          <p>
            "Insurance is not a luxury, <br></br>it's a necessity."
          </p>
          <h3>Find The Best policy Here!</h3>
          <button className="btn btn-primary btn-Knowmore">Know More</button>
        </div>
      </div>
    </Slider>
  );
}
