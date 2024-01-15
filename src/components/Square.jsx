import React from "react";

const Square = ({ value, onSquareClick, highlight }) => {
  return (
    <button
      className={highlight ? "square highlight" : "square"}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
