import React from "react";
import Feature from "../../components/feature/Feature";
import "./skills.css";

const beginnerSkills = [
  {
    title: "HTML",
    text: "Skeletal appearance of a web pages. I used HTML to structure a web and its contents.",
  },
  {
    title: "CSS",
    text: "Used for designing a content inside the HTML structuresalso to make my projects more Responsive to all devices",
  },
  {
    title: "JS",
    text: "One of core technology of World Wide Web. I used JavaScript to give interaction on my Web projects.",
  },
];
const skillsData = [
  {
    title: "ReactJS",
    text: "It is JavaScript Libraries that allows me to manipulate the DOM and building User Interface.",
  },
  {
    title: "MOCKUP",
    text: "Allows me to identify what will be the final looks of my web projects design.",
  },
  {
    title: "PROTOTYPE",
    text: "It gives me the opportunity to present what will be the looks and feels of the functions of my projects to the client before developing a web site.",
  },
  {
    title: "UI/UX DESIGN",
    text: "I am using Figma tool for creating a Mockup and Prototype design.",
  },
  {
    title: "My SQL",
    text: "It is a Relational Database  Management System. I have a simple knowledge on how to organize the database.",
  },
];
const Skills = () => {
  return (
    <div className="mon__skills section__padding" id="skills">
      <div className="mon__skills-heading">
        <h1 className="gradient__text">
          This is the Front-End Development path that im taking. I choose
          ReactJS for JavaScript Library.
        </h1>
        <p>Find Development Path that suits to you</p>
        <div className="mon__skils-heading__beginner-container">
          <h1 className="gradient__text">Needs to learn First</h1>
          {beginnerSkills.map((item, index) => (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
      <div className="mon__skills-container">
        <h1 className="gradient__text">Advance Learning</h1>
        {skillsData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.text + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
