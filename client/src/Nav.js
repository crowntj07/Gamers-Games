import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const navStyle = {
    color: 'teal'
  }

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to={'/topgames'}>
        <li>Must Play Games</li>
        </Link>
        <Link style={navStyle} to={'/search'}>
        <li>Search</li>
        <br></br>
        <Link style={navStyle} to={'/savegame'}>
        <li>SaveGame</li>
        </Link>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
