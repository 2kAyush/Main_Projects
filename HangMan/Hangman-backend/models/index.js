const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

class GameSession extends Model {}
GameSession.init(
  {
    playerName: DataTypes.STRING,
    playedLetters: DataTypes.STRING,
    startedAt: DataTypes.DATE, // maybe TIMESTAMP
    endedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "game_sessions" }
);

class Word extends Model {}
Word.init(
  {
    title: DataTypes.STRING,
  },
  { sequelize, modelName: "word" }
);

class Categories extends Model {}
Categories.init(
  { category: DataTypes.STRING },
  { sequelize, modelName: "categories" }
);

GameSession.Word = GameSession.belongsTo(Word);

Word.Categories = Word.belongsTo(Categories);
// connecting

module.exports = {
  GameSession,
  Word,
  Categories,
  sequelize,
};
