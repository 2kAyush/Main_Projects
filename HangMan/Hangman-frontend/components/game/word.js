import React from "react";

export default function Word({ maskedWord }) {
  let ctr = 0;
  return (
    <div className="display-flex justify-content-around word-flex">
      {maskedWord.map((letter) => (
        <span key={ctr++} className="word">
          &nbsp;{letter}&nbsp;
        </span>
      ))}
    </div>
  );
}
