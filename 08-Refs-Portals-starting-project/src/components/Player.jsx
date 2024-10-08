import { useRef, useState } from "react";

export default function Player() {
  const inputName = useRef();

  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputName.current.value);
    inputName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
