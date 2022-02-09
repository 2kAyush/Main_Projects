import React from "react";
import Board from "./board";

export default function Livegame({ setActive }) {
  return (
    <div className="game-container">
      {/* <img src="http://placehold.it/" /> */}
      <Board />
    </div>
  );
}
