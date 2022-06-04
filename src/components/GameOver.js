import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { onGameOver, currAttempt, correctWord } = useContext(AppContext);
  const renderGameOver = () => {
    const { gameOver, guessedWord } = onGameOver;
    if (gameOver && guessedWord) {
      return (
        <h4>
          You successfully guessed the word{" "}
          <span id="right">{correctWord} </span>
          in <span>{currAttempt.attempt}</span> attempts!
        </h4>
      );
    } else if (gameOver && !guessedWord) {
      return (
        <div>
          You failed to guess the correct word!
          <h3>
            Correct Word : <span id="right">{correctWord}</span>
          </h3>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="over">{renderGameOver()}</div>
      <button className="btn" onClick={() => window.location.reload()}>
        New Game
      </button>
    </div>
  );
}

export default GameOver;
