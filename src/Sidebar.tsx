import React, {useState, useRef} from 'react';

interface Props {
  expand: boolean
};

const Sidebar: React.FC<Props> = ({expand}) => {


let sidebarWidth : string;

if (expand) {
  sidebarWidth = "200px";
} else {
  sidebarWidth = "0px";
}

  return (
    <div className="Sidebar-Container">

    </div>
  );
};

export default Sidebar;