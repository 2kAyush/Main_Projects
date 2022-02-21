const wordProcessor = require("../utilities/wordProcessor");

async function serializeGameSession(gameSession) {
  const { actualWord, playedLetters, playedSet, lives } = await wordProcessor(
    gameSession
  );

  const maskedWord = [...actualWord].map((letter) =>
    playedSet.has(letter) ? letter : "_"
  );

  let response = {
    id: gameSession.id,
    livesLeft: lives,
    result: !!gameSession.endedAt,
    maskedWord: maskedWord,
    playedLetters: playedLetters,
  };

  if (lives === 0) response["actualWord"] = actualWord;

  return response;
}

module.exports = serializeGameSession;
