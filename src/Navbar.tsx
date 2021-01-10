import React from "react";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="Navbar-Container-Left">
        <div className="Navbar-Search-Box">
          <Link to="/"><h1 className="Navbar-Search">Search</h1></Link>
        </div>
      </div>
      <div className="Navbar-Container-Right">
        <div className="Navbar-Browse-Box">
          <h1 className="Navbar-Browse">Favorites</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;