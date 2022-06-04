import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import { boardDefault, generateWordSet } from "./components/Words";

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [onGameOver, setOnGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then(({ wordSet, rightWord }) => {
      setWordSet(wordSet);
      setCorrectWord(rightWord);
    });
  }, []);

  // pressing a letter or clicking
  const onKeySelect = (key) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = key;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };

  //pressing Enter or Clicking
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    console.log("im in enter");
    console.log(correctWord);
    console.log("im in enter");

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currAttempt.attempt + 1,
        letterPos: 0,
      });
    } else {
      alert("Not a Valid Word!");
    }

    if (currWord === correctWord) {
      setOnGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setOnGameOver({ gameOver: true, guessedWord: false });
    }
  };
  // Pressing delete or clicking
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos - 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>
          <a id="logo" href={window.location.href}>
            Wordle
          </a>
        </h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrentAttempt,
          onDelete,
          onEnter,
          onKeySelect,
          correctWord,
          setCorrectWord,
          disabledLetters,
          setDisabledLetters,
          correctLetters,
          setCorrectLetters,
          onGameOver,
          setOnGameOver,
        }}
      >
        <div className="game">
          <div className="board">
            <Board />
          </div>
          <div className="keyboard">
            {onGameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
