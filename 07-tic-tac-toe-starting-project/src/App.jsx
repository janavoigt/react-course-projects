import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
    </div>
  );
}

export default App;
