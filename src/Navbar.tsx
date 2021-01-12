import React from "react";
import {Link} from "react-router-dom";

interface Props {
  expand: boolean
  setExpand: (val:boolean) => void
};

// interface ToggleProps {
//     ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

const Navbar: React.FC<Props> = ({expand, setExpand}) => {

  //TOGGLE OPEN/CLOSE THE NAVBAR WHEN USER CLICKS FAVORITES ICON
  const toggleNavbar = () => {
    if (expand) {
      alert("setting expand to false");
      setExpand(false);
    } else {
      alert("setting expand to true");
      setExpand(true);
    };
  };

  return (
    <>
      <div className="Navbar-Container-Left">
        <div className="Navbar-Search-Box">
          <Link to="/"><h1 className="Navbar-Search">Search</h1></Link>
        </div>
      </div>
      <div className="Navbar-Container-Right">
        <div className="Navbar-Browse-Box">
          <h1 className="Navbar-Browse" onClick={toggleNavbar}>Favorites</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;