import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

const Keyboard = () => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onDelete, onEnter, onKeySelect, disabledLetters, correctLetters } =
    useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      row1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onKeySelect(key);
        }
      });
      row2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onKeySelect(key);
        }
      });
      row3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onKeySelect(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {row1.map((key, i) => {
          return (
            <Key
              key={i}
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2">
        {row2.map((key, i) => {
          return (
            <Key
              key={i}
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"Enter"} bigKey />
        {row3.map((key, i) => {
          return (
            <Key
              key={i}
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
            />
          );
        })}
        <Key keyVal={"Delete"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
