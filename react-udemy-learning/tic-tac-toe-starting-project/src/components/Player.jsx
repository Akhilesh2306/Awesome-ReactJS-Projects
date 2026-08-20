import { useState } from "react";

export default function Player({ name, symbol }) {
  const [newPlayerName, setNewPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(e) {
    setNewPlayerName(e.target.value);f
  }

  let playerName = <span className="player-name">{newPlayerName}</span>;
  let btnAction = "Edit"; // default action on Player Name

  if (isEditing) {
    playerName = (
      <input
        type="text"
        value={newPlayerName}
        onChange={handleNameChange}
        autoFocus
        required
      />
    );
    btnAction = "Save"; // action on Player Name input
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnAction}</button>
    </li>
  );
}
