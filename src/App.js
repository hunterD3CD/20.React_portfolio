import "./App.css";
// //////////////////////////////////////////////////import react and other child components ///////////////////////////////////////////////
import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from './components/Contact';


// ////////////////////////////////////////////////////Render child components in App component ////////////////////////////////////////////
function App() {

  // set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage.
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* pass in contactSelected and setContactSelected to the Nav component as props */}
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/*  if the contactSelected is false, the Gallery and About components should be rendered,  */}
        {/*  but if contactedSelected is true, the ContactForm component should be rendered */}
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

// ////////////////////////////////////////////////////Export App component  //////////////////////////////////////////////////////////////
export default App;
