import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Footer,
  Whoisrichmond,
  Skills,
  Projects,
  Header,
  Certificates,
} from "./containers";
import { Brand, Navbar } from "./components";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whoisrichmond />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;
