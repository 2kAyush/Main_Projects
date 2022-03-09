import React from "react";

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({ playedLetters, onSelect }) {
  const playedSet = new Set([...playedLetters]);
  // console.log(typeof playedSet, playedSet);
  let ctr = 0;
  return (
    <div className="display-flex justify-content-center">
      {ALL_ALPHABETS.map((alphabet) => (
        <button
          key={ctr++}
          className={`start-button start-button--letter`}
          onClick={() => {
            onSelect(alphabet);
          }}
          disabled={playedSet.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
