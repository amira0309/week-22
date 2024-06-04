import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../images/logo1.jpg'; 

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Логотип" className="logo-image" />
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
