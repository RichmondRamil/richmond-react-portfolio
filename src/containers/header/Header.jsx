import React, { useEffect } from "react";
import "./header.css";
import man from "../../assets/boy.png";
const Header = () => {
  return (
    <div className="mon__header section__padding" id="#home">
      <div data-aos="fade-right" className="mon__header-content">
        <h1 className="gradient__text">Hello I'm Richmond Vicente Ramil</h1>
        <h4>Front End Web Developer</h4>
        <p>
          I am 4th Year College student at Tarlac State University, College of
          Computer Studies and taking the of Bachelor of Science Information
          Technology major in Web and Mobile Applications.
        </p>
        <div className="mon__header-content__input">
          <input type="email" placeholder="Company Email" />
          <button type="button">Send Email</button>
        </div>
      </div>
      <div data-aos="fade-left" className="mon__header-image">
        <img src={man} alt="man" />
      </div>
    </div>
  );
};

export default Header;
