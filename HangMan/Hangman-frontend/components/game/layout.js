import React from "react";
import Start from "./start";
import Result from "./result";
import LiveGame from "./liveGame";
import { Routes, Route } from "react-router-dom";

export default function Layout({ session, guess, start, categories }) {
  const isRunning = !!session;
  const isWon = isRunning && session.result && session.livesLeft > 0;
  const isLost = isRunning && session.livesLeft === 0;

  let actualWord = "";
  if (isLost) {
    actualWord = "Actual Word was: " + session.actualWord;
  }

  /* return (
    <>
      <Routes>
        {!isRunning && (
          <Route
            path="/api"
            element={
              <Start
                onStart={start}
                isRunning={isRunning}
                categories={categories}
              />
            }
          />
        )}
        {isRunning && !isWon && !isLost && (
          <Route
            path={`/api/session/${session.id}/play`}
            element={<LiveGame session={session} guess={guess} />}
          />
        )}
        {(isLost || isWon) && (
          <Route
            path="/api" // figure out the path
            element={
              <Result
                actualWord={actualWord}
                msg={`${isWon ? "You Won!" : "Game Over!"}`}
                won={isWon}
              />
            }
          />
        )}
      </Routes>
    </>
  ); */

  return (
    <>
      {!isRunning && (
        <Start onStart={start} isRunning={isRunning} categories={categories} />
      )}
      {isRunning && !isWon && !isLost && (
        <LiveGame session={session} guess={guess} />
      )}
      {(isLost || isWon) && (
        <Result
          actualWord={actualWord}
          msg={`${isWon ? "You Won!" : "Game Over!"}`}
          won={isWon}
        />
      )}
    </>
  );
}
