import React, { useState } from "react";
import TicTacToe from "./TicTacToe";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((sqaures, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Restart the Game";
    }
    return (
      <li key={move}>
        <button className="move-description" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <TicTacToe
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <button className="reset-button" onClick={resetGame}>
            Reset
          </button>
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
