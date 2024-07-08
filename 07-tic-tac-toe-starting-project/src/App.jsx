import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player namePlayer="PLAYER 1" symbol="X" />
        <Player namePlayer="PLAYER 2" symbol="O" />
      </ol>
    </div>
  );
}

export default App;
