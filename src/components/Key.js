import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled, correct }) {
  const { onEnter, onDelete, onKeySelect } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onKeySelect(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : correct ? "correct" : disabled ? "disabled" : ""}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
