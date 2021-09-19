// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// //////////////////////////////////////////////////////////////// Nav Component /////////////////////////////////////////////////
function Nav(props) {
  // pass in contactSelected and setContactSelected to the Nav component as props
  // deconstruct the contactSelected and setContactSelected functions from props
  const {
    aboutSelected,
    setAboutSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,

  }= props;

  const  categories = [
    { name: 'commercial work', description: 'Works that provided for commercial use' },
    { name: 'educational work', description: 'Works that provided for educational use' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  //   -----------------------------------------------------------------------JSX: a language that can represent HTML in JavaScript
  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="Rockman"> 🗿</span> WO
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* //////////////////////////////////////////////////////////////////////////// About me ///////////////////////////// */}
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <a href="#about" onClick={() => {
              setAboutSelected(true);
              setContactSelected(false); 
              setResumeSelected(false);
              }}
            >
              About me
            </a>
          </li>
          {/* //////////////////////////////////////////////////////////////////////////// Resume   ///////////////////////////// */}
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
          <span onClick={() => {
            setAboutSelected(false);
            setContactSelected(false);
            setResumeSelected(true);
            }}
          >
              Resume
            </span>
          </li>
          {/* //////////////////////////////////////////////////////////////////////////// Contact   ///////////////////////////// */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false);
              setContactSelected(true);
              setResumeSelected(false);
              }}
            >
              Contact</span>
          </li>
          {/* //////////////////////////////////////////////////////////////////////////// Portfolio   ///////////////////////////// */}
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

// ////////////////////////////////////////////////////Export Nav component  ////////////////////////////////////////////////////
export default Nav;