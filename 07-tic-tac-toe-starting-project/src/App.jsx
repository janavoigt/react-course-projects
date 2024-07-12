import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0] === "X") {
        currentPlayer = "O";
      }
      const updateTurns = [
        { square: { row: rowIdx, col: colIdx }, player: activePlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          inicialName="PLAYER 1"
          symbol="X"
          isActive={activePlayer === "X"}
        />
        <Player
          inicialName="PLAYER 2"
          symbol="O"
          isActive={activePlayer === "O"}
        />
      </ol>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        activePlayerSymbol={activePlayer}
      />
      <Log />
    </div>
  );
}

export default App;
