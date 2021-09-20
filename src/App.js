import "./App.css";
// //////////////////////////////////////////////////import react and other child components ///////////////////////////////////////////////
import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


// ////////////////////////////////////////////////////Render child components in App component ////////////////////////////////////////////
function App() {

  // set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage.
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);


  return (
    <div>
      {/* pass in contactSelected and setContactSelected to the Nav component as props */}
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>

      <main>
      {!aboutSelected ? (
          <>
          </>
        ) : (
            <About />
          )}
      {!resumeSelected ? (
          <>
          </>
        ) : (
            <Resume />
          )}
      {!contactSelected ? (
          <>
          </>
        ) : (
            <ContactForm />
          )}
      {!portfolioSelected ? (
          <>
          </>
        ) : (
            <Portfolio />
          )}
            
      </main>
    </div>
  );
}

// ////////////////////////////////////////////////////Export App component  //////////////////////////////////////////////////////////////
export default App;

