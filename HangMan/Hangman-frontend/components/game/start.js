import React from "react";

export default function Start({ onStart, isRunning }) {
  return (
    <div>
      <button
        className={`start-button ${isRunning && "display-none"}`}
        onClick={() => onStart()}
      >
        Start
      </button>
    </div>
  );
}
