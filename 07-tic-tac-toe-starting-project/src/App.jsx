import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player inicialName="PLAYER 1" symbol="X" />
        <Player inicialName="PLAYER 2" symbol="O" />
      </ol>
    </div>
  );
}

export default App;
