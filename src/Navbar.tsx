import React from "react";

interface Props {
  text?: string;
}

const Navbar: React.FC <Props> = () => {
  return (
    <>
      <div className="Navbar-Container-Left">
        <div className="Navbar-Search-Box">
          <h1 className="Navbar-Search">Search</h1>
        </div>
      </div>
      <div className="Navbar-Container-Right">
        <div className="Navbar-Browse-Box">
          <h1 className="Navbar-Browse">Artists Details</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;