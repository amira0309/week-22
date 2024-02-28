import React from 'react';
import './Tariff.css';

const Tariff = ({ name, price, highlighted, type, speed, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`tariff ${highlighted ? 'highlighted' : ''} ${type}`} onClick={handleClick}>
      <h3>{name}</h3>
      <p>руб {price}/мес</p>
      <p>Скорость: {speed}</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  );
};

export default Tariff;
