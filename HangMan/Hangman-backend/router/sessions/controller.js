const Sequelize = require("sequelize");
const { Word, GameSession, Categories } = require("../../models");
const serializeGameSession = require("../../serializers/gameSession");
const gameSessionService = require("../../services/game_session_service");

async function CreateSession(req, res) {
  const name = req.body.name;
  const categoryId = req.body.categoryId;
  // const word = await Word.findOne({
  //   order: Sequelize.fn("RANDOM"),
  // });
  const word = await Word.findOne({
    order: Sequelize.fn("RANDOM"),
    where: {
      categoryId, // == categoryId: categoryId
    },
  });
  console.log(word.id, word.title);

  const gameSession = await GameSession.create({
    playerName: name,
    playedLetters: "",
    wordId: word.id,
    startedAt: new Date(),
  });

  res.json(await serializeGameSession(gameSession));
}

async function PlaySession(req, res) {
  const gameId = req.params.id;
  const letter = req.body.letter;

  const gameSession = await GameSession.findByPk(gameId);
  await gameSessionService.playWordInGameSession(gameSession, letter);
  const response = await serializeGameSession(gameSession);
  // console.log(response);
  res.json(response);
}

async function getCategories(req, res) {
  const categories = await Categories.findAll();
  // console.log(categories);
  const response = categories.map((el) => {
    return {
      id: el.id,
      category: el.category,
    };
  });
  // const response = { id: categories.id, category: categories.category };
  // console.log(response);
  res.json(response);
}

module.exports = {
  CreateSession,
  PlaySession,
  getCategories,
};
