import React from "react";
import "../index.css";
import SbiLogo from "../Images/Sbi.png";
import Pnb from "../Images/Png.Jpeg";
import Bharati from "../Images/Bharati.png";
import HdfcLife from "../Images/HDFC.png";
import IciciLogo from "../Images/ICICI.jpg";
import FutureGenerali from "../Images/Futture Genera;i.png";
const Brands = () => {
  return (
    <div className="Brand_MainDiv">
      <div className="Brand_div_allitems">
        <div className="Brand_div_Item">
          <ul className="d-flex ul">
            <li>
              <img src={SbiLogo} width="80%" className="brand_image" />
            </li>

            <li>
              <img src={Pnb} width="80%" className="brand_image" />
            </li>

            <li>
              <img
                src={Bharati}
                width="80%"
                height="auto"
                className="brand_image"
              />
            </li>
          </ul>
          <ul className="d-flex ul">
            <li>
              <img
                src={HdfcLife}
                width="80%"
                height="auto"
                className="brand_image"
              />
            </li>

            <li>
              <img
                src={IciciLogo}
                width="80%"
                height="auto"
                className="brand_image"
              />
            </li>

            <li>
              <img
                src={FutureGenerali}
                width="80%"
                height="auto"
                className="brand_image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
{
  /*  */
}
