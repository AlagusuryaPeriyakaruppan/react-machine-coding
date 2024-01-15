import React from "react";
import Square from "./Square";

const TicTacToe = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares) || calculateDraw(squares))
      return; //if the box is already populated

    const nextSquares = squares.slice(); //copies the squares
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  const winnerInfo = calculateWinner(squares);
  const draw = calculateDraw(squares);

  let status;
  if (winnerInfo?.winner) {
    status = "Winner is : " + winnerInfo?.winner + "🏆";
  } else if (draw) {
    status = "It's a draw☹️";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        highlight={winnerInfo?.winningSquares?.includes(i)}
        key={i}
      />
    );
  };

  const renderBoardRow = (row) => {
    return (
      <div className="board-row" key={row}>
        {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
      </div>
    );
  };

  const renderBoard = () => {
    return [0, 1, 2].map((row) => renderBoardRow(row));
  };

  return (
    <div>
      <div className="status">{status}</div>
      {renderBoard()}
    </div>
  );
};

export default TicTacToe;

const calculateWinner = (boardValues) => {
  const winningIndices = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
  ];

  for (let i = 0; i < winningIndices.length; i++) {
    const [a, b, c] = winningIndices[i];
    if (
      boardValues[a] &&
      boardValues[a] === boardValues[b] &&
      boardValues[a] === boardValues[c]
    ) {
      return { winner: boardValues[a], winningSquares: [a, b, c] };
    }
  }
  return null;
};

const calculateDraw = (boardValues) => {
  return boardValues.every((square) => square !== null);
};
