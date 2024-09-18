import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSymbolClick(rowIdx, colIdx) {
  //     setGameBoard((prevGameBoard) => {
  //       const updateBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updateBoard[rowIdx][colIdx] = activePlayerSymbol;

  //       return updateBoard;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
