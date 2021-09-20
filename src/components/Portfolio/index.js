// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from 'react'
// import PhotoList from '../PhotoList';
import project1 from "../../assets/small/1.jpg";
import project2 from "../../assets/small/2.jpg";

// ////////////////////////////////////////////////// About Component /////////////////////////////////////////////////////////////
function Portfolio() {

//   -----------------------------------------------------------------------JSX: a language that can represent HTML in JavaScript
  return (
    <section>
      <h1>Welcome to Portfolio</h1>
      <p>Below are placeholders. Looking forward to hear more comments.</p>
      {/* <PhotoList /> */}
      <div className="flex-row">
        <div>
          <a href="https://github.com/soumyajit4419/Chatify">project 1</a>
          <img
            src={project1}
            alt="project 1"
            className="img-thumbnail mx-1"
            key="project1"
            href="https://github.com/soumyajit4419/Chatify"
            />
        </div>
        <div>
          <h3>project 2</h3>
          <img
            src={project2}
            alt="project 1"
            className="img-thumbnail mx-1"
            key="project1"
            />
        </div>
      </div>
    </section>
  );
}

// ////////////////////////////////////////////////////Export About component  ////////////////////////////////////////////////////
export default Portfolio

