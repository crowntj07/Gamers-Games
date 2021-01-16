import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https:////api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added')
    .then(resp => resp.json())
    .then(({results}) => {
      setGames(results)
      console.log(games)
    } 
    )
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
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default TopGames;