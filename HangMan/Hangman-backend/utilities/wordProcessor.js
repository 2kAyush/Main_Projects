const MAX_LIVES = 6;

async function wordProcessor(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const playedLetters = gameSession.playedLetters.split("");

  const wordSet = new Set([...actualWord]);
  const playedSet = new Set([...playedLetters]);
  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });

  const lives = MAX_LIVES - wrongLetters.length;

  const isWon = [...wordSet].reduce((acc, curr) => {
    if (!playedSet.has(curr)) return false;
    return acc;
  }, true);
  return {
    actualWord,
    playedLetters,
    playedSet,
    wordSet,
    wrongLetters,
    lives,
    isWon,
  };
}

module.exports = wordProcessor;
