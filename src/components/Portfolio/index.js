// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from 'react'
// import PhotoList from '../PhotoList';
import project1 from "../../assets/small/pizzahunt.jpg";
import project2 from "../../assets/small/pethome.jpg";
import project3 from "../../assets/small/notetaker.jpg";
import project4 from "../../assets/small/zookeeper.jpg";

// ////////////////////////////////////////////////// About Component /////////////////////////////////////////////////////////////
function Portfolio() {

//   -----------------------------------------------------------------------JSX: a language that can represent HTML in JavaScript
  return (
    <section>
      <h1>Welcome to Portfolio</h1>
      <p>Below are projects that I worked on. Looking forward to hear more comments.</p>
      <div className="flex-row">
        <div className="flex-column">
          <a href="https://pure-temple-98078.herokuapp.com/">view project 1</a>
          <a href="https://github.com/hunterD3CD/Pizzahunt-Nosql">github</a>
          <img
            src={project1}
            alt="project 1"
            className="img-thumbnail mx-1"
            key="project1"
            />
        </div>
        <div className="flex-column">
          <a href="https://project-online-pet-home.herokuapp.com/">view project 2</a>
          <a href="https://github.com/hunterD3CD/Group-Project-2-online-pet-home">github</a>
          <img
            src={project2}
            alt="project 2"
            className="img-thumbnail mx-1"
            key="project2"
            />
        </div>
        <div className="flex-column">
          <a href="https://note-taker-11express.herokuapp.com/">view project 3</a>
          <a href="https://github.com/hunterD3CD/11-note-taker-express">github</a>
          <img
            src={project3}
            alt="project 3"
            className="img-thumbnail mx-1"
            key="project3"
            />
        </div>
        <div className="flex-column">
          <a href="https://afternoon-temple-89846.herokuapp.com/">view project 4</a>
          <a href="https://github.com/hunterD3CD/modular11-express-zookeeper">github</a>
          <img
            src={project4}
            alt="project 4"
            className="img-thumbnail mx-1"
            key="project4"
            />
        </div>
      </div>
    </section>
  );
}

// ////////////////////////////////////////////////////Export About component  ////////////////////////////////////////////////////
export default Portfolio

