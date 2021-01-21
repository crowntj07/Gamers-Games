import React from 'react';
import { Link } from 'react-router-dom';

const SavedGamesResults = (props) => {

  return (
    <div className="results-container">
      <ul>
      {
        props.gameResults.map(game => (
          <li key={game._id}>

            <Link to={{
              pathname: `/game/${game.title}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.title}</h3>

            </Link>
            
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default SavedGamesResults;
