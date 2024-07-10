const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, idx) => (
        <li key={idx}>
          <ol>
            {row.map((playerSymbol, idx) => (
              <li key={idx}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
