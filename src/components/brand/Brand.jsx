import React from "react";
import "./brand.css";
import {
  freecodecamp,
  stackoverflow,
  theodinproject,
  webschool,
} from "./imports";
const Brand = () => {
  return (
    <div data-aos="fade-up" className="mon__brand">
      <div>
        <img src={theodinproject} alt="the odin project logo" />
      </div>
      <div>
        <img src={stackoverflow} alt="stackoverflow logo" />
      </div>
      <div>
        <img src={freecodecamp} alt="freecodecamp logo" />
      </div>
      <div>
        <img src={webschool} alt="w3school logo" />
      </div>
    </div>
  );
};

export default Brand;
