import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../images/logo1.jpg'; // Импортируйте изображение логотипа

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        {/* Используйте Link для логотипа */}
        <Link to="/" className="logo-link">
          Логотип
        </Link>
      </div>
      <div className="menu-links">
        <Link to="/">Главная</Link>
        <Link to="/game">Тренажер карточек</Link>
      </div>
    </div>
  );
};

export default Menu;
