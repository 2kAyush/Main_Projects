import React, { useState } from "react";
import Layout from "./layout";

const MAX_LIVES = 6;
export default function Game() {
  const [actualWord, setActualWord] = useState("");
  const [playedLetters, setPlayedLetters] = useState([]);

  const wordSet = new Set([...actualWord]);
  const playedSet = new Set([...playedLetters]);
  // const lives = MAX_LIVES - wordSet.length;
  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });
  const lives = MAX_LIVES - wrongLetters.length;
  const isRunning = actualWord;
  const isWon =
    isRunning &&
    [...wordSet].reduce((acc, curr) => {
      if (!playedSet.has(curr)) return false;
      return acc;
    }, true);

  const guess = (letter) => {
    setPlayedLetters((prev) => [...prev, letter]);
  };

  const start = () => {
    setActualWord("house");
    setPlayedLetters([]);
  };

  return (
    <>
      <Layout
        lives={lives}
        actualWord={actualWord}
        playedSet={playedSet}
        guess={guess}
        start={start}
        isWon={isWon}
        isRunning={isRunning}
      />
    </>
  );
}
