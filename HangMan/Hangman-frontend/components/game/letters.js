import React from "react";

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({ playedLetters, onSelect }) {
  return (
    <div className="display-flex justify-content-center">
      {ALL_ALPHABETS.map((alphabet) => (
        <button
          className={`start-button start-button--letter`}
          onClick={() => onSelect(alphabet)}
          disabled={playedLetters.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
