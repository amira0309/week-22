import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/">
        <img src="components/images/logo1" alt="Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/game">Страница с карточками</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
