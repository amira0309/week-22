// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/" className="menu-link">
        <img src="path_to_your_logo" alt="Logo" className="menu-logo" />
      </Link>
      <div className="menu-links">
        <Link to="/" className="menu-link">Главная</Link>
        <Link to="/game" className="menu-link">Страница с карточками</Link>
      </div>
    </div>
  );
};

export default Menu;
