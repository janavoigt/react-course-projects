import { useState } from "react";

export default function Player({ inicialName, symbol, isActive }) {
  const [namePlayer, setNamePlayer] = useState(inicialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChance(event) {
    setNamePlayer(event.target.value);
  }

  let playerName = <span className="player-name">{namePlayer}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={namePlayer}
        onChange={handleNameChance}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
