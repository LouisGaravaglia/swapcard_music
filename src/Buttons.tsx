import React from "react";

const Buttons: React.FC = ({incrementOffset, decrementOffset}) => {
  return (
    <>
    <button onClick={incrementOffset}>+</button>
    <button onClick={decrementOffset}>-</button>
    </>
  );
};

export default Buttons;