import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import API from './utils/API';



const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])
  
  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https:////api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added')
    .then(resp => resp.json())
    .then(({results}) => { setGames(results)
      console.log(games)
    }
    )
  }

  const handleButtonClick = game => {
  console.log (game)
  const {name, released, rating} = game
  console.log (name)
  console.log (released)
  console.log (rating)
  const gameObj = {
    title: name,
    date: released,
    rating: rating
  }
  API.saveGame (gameObj).then(function(res){
    console.log (res)
  })
  }

  return (
    <div>
      <ul>
      {
        games.map(game => (
          <li key={game.id}>
            <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <h3>{game.name}</h3>
            
            <img src={game.background_image} alt="game"/>
            </Link>
            <button className="gameButton" gameid={game.id} onClick={() => handleButtonClick(game)} gamename={game.name}>Save Game</button>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default TopGames;