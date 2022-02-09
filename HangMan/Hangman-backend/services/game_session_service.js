const wordProcessor = require("../utilities/wordProcessor");

const MAX_LIVES = 6;

async function markGameCompleted(gameSession) {
  /*const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const playedLetters = gameSession.playedLetters.split("");

  const wordSet = new Set([...actualWord]);
  const playedSet = new Set([...playedLetters]);
  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });
  const lives = MAX_LIVES - wrongLetters.length;
*/

  const {
    actualWord,
    playedLetters,
    playedSet,
    wordSet,
    wrongLetters,
    lives,
    isWon,
  } = await wordProcessor(gameSession);

  if (lives == 0 || isWon) {
    gameSession.endedAt = new Date();
    await gameSession.save();
  }
}

async function playWordInGameSession(gameSession, letter) {
  // const playedLetters = gameSession.playedLetters.split("");
  // const playedSet = new Set([...playedLetters]);

  const { playedLetters, playedSet } = await wordProcessor(gameSession);

  if (playedSet.has(letter)) {
    return;
  }

  playedLetters.push(letter);
  gameSession.playedLetters = playedLetters.join("");
  await gameSession.save();
  await markGameCompleted(gameSession);
}

module.exports = { markGameCompleted, playWordInGameSession };
