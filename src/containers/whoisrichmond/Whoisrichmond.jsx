import React from "react";
import { Feature } from "../../components";
import "./whoisrichmond.css";
const Whoisrichmond = () => {
  return (
    <div className="mon__whomon section__margin" id="whomon">
      <div data-aos="zoom-in" className="mon__whomon-feature">
        <Feature
          title="Who am I?"
          text="Hello, I am a Front-End Web Developer aspirant. I am managing my daily time to be able to do what i need to do on my daily lifestyle like, going at the gym, interact or connect with people and my friends. Second is giving time ,love and attention to my family and also my pets, practicing my skills and learning new things. Also I finish all my task before the before the deadlines. This technique gives me more time to do more upcoming task."
        />
      </div>
      <div data-aos="zoom-in" className="mon__whomon-heading">
        <h1 className="gradient__text">
          Who is Richmond as an Information Techlogy Student
        </h1>
        <p>Be Consistent</p>
      </div>
      <div data-aos="zoom-in" className="mon__whomon-container">
        <Feature
          title="As a Student"
          text="Me as a student?. I want all my works done before the deadlines. It gives me more time to practice my skills at night without worrying about the due date of our task. It is all about time management guys!"
        />
        <Feature
          title="As a Team member"
          text="Me as a Team member?. Yeah you read it right, Team member. I am team member person, I want to collaborate with other people with the same goals in life and finishing our task with helping and learning with each other. I can help what my team needs to me to do and also helping me to improve more skills and experience. its all about helping and growing on each others guys! "
        />
        <Feature
          title="As a Friend"
          text="I am a Supportive friend as long as you are doing a good things on your life. I can make you laugh every day even though we dont have much of money. Also I will be always be there if you need a friend to talk when you are having a bad day or problems in life. I got you!"
        />
      </div>
    </div>
  );
};

export default Whoisrichmond;
