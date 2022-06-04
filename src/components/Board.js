import React from "react";
import Letter from "./Letter";

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Letter letterPos={0} currentVal={0} />
        <Letter letterPos={1} currentVal={0} />
        <Letter letterPos={2} currentVal={0} />
        <Letter letterPos={3} currentVal={0} />
        <Letter letterPos={4} currentVal={0} />
      </div>
      <div className="row">
        <Letter letterPos={0} currentVal={1} />
        <Letter letterPos={1} currentVal={1} />
        <Letter letterPos={2} currentVal={1} />
        <Letter letterPos={3} currentVal={1} />
        <Letter letterPos={4} currentVal={1} />
      </div>
      <div className="row">
        <Letter letterPos={0} currentVal={2} />
        <Letter letterPos={1} currentVal={2} />
        <Letter letterPos={2} currentVal={2} />
        <Letter letterPos={3} currentVal={2} />
        <Letter letterPos={4} currentVal={2} />
      </div>
      <div className="row">
        <Letter letterPos={0} currentVal={3} />
        <Letter letterPos={1} currentVal={3} />
        <Letter letterPos={2} currentVal={3} />
        <Letter letterPos={3} currentVal={3} />
        <Letter letterPos={4} currentVal={3} />
      </div>
      <div className="row">
        <Letter letterPos={0} currentVal={4} />
        <Letter letterPos={1} currentVal={4} />
        <Letter letterPos={2} currentVal={4} />
        <Letter letterPos={3} currentVal={4} />
        <Letter letterPos={4} currentVal={4} />
      </div>
      <div className="row">
        <Letter letterPos={0} currentVal={5} />
        <Letter letterPos={1} currentVal={5} />
        <Letter letterPos={2} currentVal={5} />
        <Letter letterPos={3} currentVal={5} />
        <Letter letterPos={4} currentVal={5} />
      </div>
    </div>
  );
}

export default Board;
