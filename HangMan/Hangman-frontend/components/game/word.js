import React from "react";

export default function Word({ maskedWord }) {
  return (
    <div className="display-flex justify-content-around word-flex">
      {maskedWord.map((letter) => (
        <span className="word">&nbsp;{letter}&nbsp;</span>
      ))}
    </div>
  );
}
