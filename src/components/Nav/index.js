// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

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
    portfolioSelected,
    setPortfolioSelected,
  }= props;

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
              setPortfolioSelected(false);
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
            setPortfolioSelected(false);
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
              setPortfolioSelected(false);
              }}
            >
              Contact</span>
          </li>
          {/* //////////////////////////////////////////////////////////////////////////// Portfolio   ///////////////////////////// */}
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false);
              setContactSelected(false);
              setResumeSelected(false);
              setPortfolioSelected(true);
              }}
            >
              Portfolio</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// ////////////////////////////////////////////////////Export Nav component  ////////////////////////////////////////////////////
export default Nav;