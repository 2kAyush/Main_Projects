const { Router } = require("express");
const Controller = require("./controller");

const router = Router();

router.post("/", Controller.CreateSession);
router.get("/", Controller.getCategories);
router.post("/:id/play", Controller.PlaySession);
module.exports = router;
