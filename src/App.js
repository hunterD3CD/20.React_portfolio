import "./App.css";
// //////////////////////////////////////////////////import react and other child components ///////////////////////////////////////////////
import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import ContactForm from './components/Contact';


// ////////////////////////////////////////////////////Render child components in App component ////////////////////////////////////////////
function App() {

  // set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage.
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

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
            
      </main>
    </div>
  );
}

// ////////////////////////////////////////////////////Export App component  //////////////////////////////////////////////////////////////
export default App;

