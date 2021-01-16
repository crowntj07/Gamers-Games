const router = require("express").Router();
const gamesController = require("../../controller/gamesController");

// Matches with "/api/books"
router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);