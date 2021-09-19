// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// ////////////////////////////////////////////////////////////////JSX ///////////////////////////////////////////////////////////
function Nav() {
  const  categories = [
    { name: 'commercial work', description: 'Works that provided for commercial use' },
    { name: 'educational work', description: 'Works that provided for educational use' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="Rockman"> 🗿</span> WO
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className="mx-2">
          <span onClick={() => handleClick()}>
              Resume
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
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