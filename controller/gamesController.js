const db = require("../models");

// Defining methods for the gamesController
module.exports = {
  findAll: function(req, res) {
    db.Game
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Game
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
};

