import React from "react";

interface Props {
  incrementOffset: () => {}
  decrementOffset: () => {}
}

const Buttons: React.FC<Props> = ({incrementOffset, decrementOffset}) => {

  const increaseOffset = () => {
    incrementOffset();
  };

  const decreaseOffset = () => {
    decrementOffset();
  };

  return (
    <>
    <button onClick={increaseOffset}>+</button>
    <button onClick={decreaseOffset}>-</button>
    </>
  );
};

export default Buttons;