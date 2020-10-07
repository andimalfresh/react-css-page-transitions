import React from "react";
import "../App.css";

const homePage = () => {
  return (
    <div>
      <div className="pageImage">
        <img className="pageImage" src={require("./img/Mountains.png")} />
      </div>
      <div className="pageText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <a href="/aboutPage">
        <button> Go to Page </button>
      </a>
      </div>

    </div>
  );
};

export default homePage;
