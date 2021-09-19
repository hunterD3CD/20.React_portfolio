// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

// ////////////////////////////////////////////////// About Component /////////////////////////////////////////////////////////////
function Home() {

//   -----------------------------------------------------------------------JSX: a language that can represent HTML in JavaScript

  return (
    <section className="my-5" >
      <h1 id="about">Welcome to Chao's Homepage</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I love design!
      </p>
      </div>
    </section>
  )
}

// ////////////////////////////////////////////////////Export About component  ////////////////////////////////////////////////////
export default Home