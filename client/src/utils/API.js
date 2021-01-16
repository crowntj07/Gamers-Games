import axios from "axios";

export default {
    // Gets all books
    getGames: function() {
      return axios.get("/api/games");
    },

    // Saves a book to the database
  saveGame: function(gameData) {
    return axios.post("/api/games", gameData);
  }
};
