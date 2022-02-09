const Express = require("express");
const Router = require("./router");
const { sequelize, Word } = require("./models");

async function initialize() {
  const app = Express();

  app.use(Express.json());
  app.use("/api", Router);

  await sequelize.sync();

  app.listen(8000, () => {
    console.log("listening on port 8000");
  });
}

initialize();

/* await Word.bulkCreate([
  { title: "buzzinga" },
  { title: "house" },
  { title: "amazing" },
  { title: "scaler" },
  { title: "nodejs" },
  { title: "Programmer" },
]); */
