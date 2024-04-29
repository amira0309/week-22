import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ title = "Words" }) {
    return (
        <div>
            <h1>{title}</h1> {/* Отображаем заголовок */}
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cardgame">CardGame</Link>
        </div>
    );
};

export default NavBar;
