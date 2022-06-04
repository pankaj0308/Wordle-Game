import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, currentVal }) => {
  const {
    board,
    correctWord,
    currAttempt,
    setCorrectLetters,
    setDisabledLetters,
  } = useContext(AppContext);
  const letter = board[currentVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  useEffect(() => {
    if (letter !== "" && correct) {
      setCorrectLetters((prev) => [...prev, letter]);
    }

    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  const letterState =
    currAttempt.attempt > currentVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState ? `${letterState}` : ""}>
      {letter}
    </div>
  );
};

export default Letter;
