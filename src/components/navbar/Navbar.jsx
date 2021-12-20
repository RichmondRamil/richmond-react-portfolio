import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whomon">Who is Richmond?</a>
    </p>
    <p>
      <a href="#skills">Skills</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#certificates">Certficates</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="mon__navbar">
      <div className="mon__navbar-links">
        <div className="mon__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mon__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="mon__navbar-sign">
        <p>Looking for FE Developer?</p>
        <button>Hire me</button>
      </div>
      <div className="mon__navbar-menu">
        {toggleMenu ? (
          <AiOutlineClose
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <AiOutlineMenuUnfold
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="mon__navbar-menu_container scale-up-center">
            <div className="mon__navbar-menu_container-links">
              <Menu />
              <div className="mon__navbar-menu_container-links-sign">
                <p>Looking for FE Developer?</p>
                <button>Hire me</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
