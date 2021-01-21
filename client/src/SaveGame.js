import React, { useState, useEffect } from "react";
import SavedGamesResults from "./SavedGamesResults";
import API from "./utils/API"


function SaveGame() {
    // Setting our component's initial state
    const [games, setGames] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all game and store them with setBooks
    useEffect(() => {
      API.getGames().then(function(res){
          setGames(res.data)
      })
    }, [])

    return (
        <div className="save-game">
          <h1>Saved Game</h1>
        
            
            <SavedGamesResults gameResults={games} />
        </div>
      );
    }
    


    export default SaveGame;