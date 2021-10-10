// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

// ////////////////////////////////////////////////// About Component /////////////////////////////////////////////////////////////
function About() {

//   -----------------------------------------------------------------------JSX: a language that can represent HTML in JavaScript

  return (
    <section className="my-5" >
      <h1 id="about">Welcome to Chao's Portfolio</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I love design! Please visit my github below.
      </p>
      <a href="https://github.com/hunterD3CD/11-note-taker-express"><i class="fab fa-github fa-5x"></i></a>
      </div>
    </section>
  )
}

// ////////////////////////////////////////////////////Export About component  ////////////////////////////////////////////////////
export default About