import "./App.css";
// //////////////////////////////////////////////////import react and other child components ///////////////////////////////////////////////
import React from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from './components/Contact';

// const [contactSelected, setContactSelected] = useState(false);


// ////////////////////////////////////////////////////Render child components in App component ////////////////////////////////////////////
function App() {
  return (
    <div>
      <Nav />
      <main>
        <ContactForm />
        <About />
      </main>
    </div>
  );
}

// ////////////////////////////////////////////////////Export App component  //////////////////////////////////////////////////////////////
export default App;
