import React from "react";
import "./projects.css";
import { aviary, campbakes, passengercounter, calculator } from "./imports";
const Projects = () => {
  return (
    <div
      className="mon__projects section__margin d-flex justify-content-center"
      id="projects"
    >
      <div className="row">
        <h1 className="text-center">Projects</h1>
        <div data-aos="zoom-out-up" className="col-md-4">
          <div className="mon__project-cards text-center shadow">
            <div className="overflow">
              <img src={aviary} className="card-img-top" alt="" />
            </div>
            <div className="mon__projects-cards__body text-dark">
              <h4 className="card-title">Aviary</h4>
              <p className="card-text text-dark">
                This is the first website that I made on my friends business
                which is they are selling own breed cockatiel birds. This
                busines is located in pangasinan.
              </p>
              <a href="#" className="btn btn-success">
                Download Files
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="col-md-4">
          <div className="mon__project-cards text-center">
            <div className="overflow">
              <img src={campbakes} className="card-img-top" alt="" />
            </div>
            <div className="mon__projects-cards__body text-dark">
              <h4 className="card-title">Camp Bakes Bakery</h4>
              <p className="card-text text-dark">
                This is the second website that I created for my cousins
                business to be able him to show case his own baked styles to his
                customers.
              </p>
              <a href="#" className="btn btn-success">
                Download Files
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="col-md-4">
          <div className="mon__project-cards text-center">
            <div className="overflow">
              <img src={passengercounter} className="card-img-top" alt="" />
            </div>
            <div className="mon__projects-cards__body text-dark">
              <h4 className="card-title">Passenger Counter</h4>
              <p className="card-text text-dark">
                This is the project that I created after reading, watching some
                tutorials of JavaScript , also practicing and applying my
                knowledge on ReactJS
              </p>
              <a href="#" className="btn btn-success">
                Download Files
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="col-md-4">
          <div className="mon__project-cards text-center">
            <div className="overflow">
              <img src={calculator} className="card-img-top" alt="" />
            </div>
            <div className="mon__projects-cards__body text-dark">
              <h4 className="card-title">Calculator</h4>
              <p className="card-text text-dark">
                This is the first practice of my JavaScript Learning when I was
                3rd year College
              </p>
              <a href="#" className="btn btn-success">
                Download Files
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="col-md-4">
          <div className="mon__project-cards text-center">
            <div className="overflow">
              <img src={aviary} className="card-img-top" alt="" />
            </div>
            <div className="mon__projects-cards__body text-dark">
              <h4 className="card-title">Card Title</h4>
              <p className="card-text text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                perspiciatis voluptatem eum, quas voluptatibus cum fugit maiores
                vitae eveniet ipsa.
              </p>
              <a href="#" className="btn btn-success">
                Download Files
              </a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="col-md-4">
          <div className="mon__project-cards text-center">
            <div className="overflow">
              <img src={aviary} className="card-img-top" alt="" />
            </div>
            <div className="mon__projects-cards__body text-dark">
              <h4 className="card-title">Card Title</h4>
              <p className="card-text text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                perspiciatis voluptatem eum, quas voluptatibus cum fugit maiores
                vitae eveniet ipsa.
              </p>
              <a href="#" className="btn btn-success">
                Download Files
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
