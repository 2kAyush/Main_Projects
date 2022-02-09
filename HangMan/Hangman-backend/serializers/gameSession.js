const wordProcessor = require("../utilities/wordProcessor");
const MAX_LIVES = 6;

async function serializeGameSession(gameSession) {
  /* const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const playedLetters = gameSession.playedLetters.split("");

  const wordSet = new Set([...actualWord]);
  const playedSet = new Set([...playedLetters]);
  const wrongLetters = playedLetters.filter((letter) => {
    return !wordSet.has(letter);
  });
  const lives = MAX_LIVES - wrongLetters.length; */

  const { actualWord, playedLetters, playedSet, wordSet, wrongLetters, lives } =
    await wordProcessor(gameSession);

  const maskedWord = [...actualWord].map((letter) =>
    playedSet.has(letter) ? letter : "_"
  );

  return {
    id: gameSession.id,
    livesLeft: lives,
    result: !!gameSession.endedAt,
    maskedWord: maskedWord,
  };
}

module.exports = serializeGameSession;
