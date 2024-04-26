import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <Link to="/">Логотип</Link>
      </div>
      <div className="menu-links">
        <Link to="/">Главная</Link>
        <Link to="/game">Игра с карточками</Link>
      </div>
    </div>
  );
};

export default Menu;

