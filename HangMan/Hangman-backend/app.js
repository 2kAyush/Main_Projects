const Express = require("express");
const Router = require("./router");
const { sequelize, Word, Categories } = require("./models");
const PORT = 8000;

async function initialize() {
  const app = Express();

  app.use(Express.json());
  app.use((req, res, next) => {
    // res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    // res.set("Access-Control-Allow-Origin", "http://localhost:8080");
    res.set(
      "Access-Control-Allow-Origin",
      "https://thirsty-knuth-12af3d.netlify.app"
    );
    res.set("Access-Control-Allow-Headers", "Content-type");
    next();
  });
  app.use("/api", Router);

  await sequelize.sync();

  app.listen(process.env.PORT || 8000, () => {
    console.log(`listening on port ${PORT}`);
  });
}

initialize();

// after syncing the db(16th line)

/* await Categories.bulkCreate([
    { category: "City" },
    { category: "Fruits" },
    { category: "Country" },
    { category: "Food" },
  ]);

  await Word.bulkCreate([
    { title: "delhi", categoryId: "1" },
    { title: "mumbai", categoryId: "1" },
    { title: "bangalore", categoryId: "1" },
    { title: "banana", categoryId: "2" },
    { title: "apple", categoryId: "2" },
    { title: "pomegranate", categoryId: "2" },
    { title: "india", categoryId: "3" },
    { title: "phillipines", categoryId: "3" },
    { title: "brunei", categoryId: "3" },
    { title: "turducken", categoryId: "4" },
    { title: "croissants", categoryId: "4" },
    { title: "sauerkraut", categoryId: "4" },
  ]);
 */
