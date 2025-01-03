import { use } from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playername, setPlayername] = useState(name);
  const [isEditing, setisEditing] = useState(false);

  const handleEditClick = () => {
    //setisEditing(!isEditing).  // schedule a state update to be true but doen't do it immediately.
    setisEditing((editing) => !editing);
  };
  const handleChange = (event) => {
    // console.log("event...", event);
    setPlayername(event.target.value);
  };

  return (
    <li>
      <span className="Player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playername}
            onChange={handleChange}
          ></input>
        ) : (
          <span className="player-name">{playername}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
