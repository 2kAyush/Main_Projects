import React from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";

export default function LiveGame({ session, guess }) {
  return (
    <>
      <div className="game-wrapper">
        <div className="left-pane">
          <Lives livesLeft={session.livesLeft} />
        </div>
        <div className="right-pane">
          <Word maskedWord={session.maskedWord} />
          <Letters playedLetters={session.playedLetters} onSelect={guess} />
        </div>
      </div>
    </>
  );
}
