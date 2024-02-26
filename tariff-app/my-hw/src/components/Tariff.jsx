import React from 'react';
import './Tariff.css';

class Tariff extends React.Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { name, price, highlighted, type, speed } = this.props;
    return (
      <div className={`tariff ${highlighted ? 'highlighted' : ''} ${type}`} onClick={this.handleClick}>
        <h3>{name}</h3>
        <p>руб {price}/мес</p>
        <p>Скорость: {speed}</p>
        <p>Объем включенного трафика не ограничен</p>
      </div>
    );
  }
}

export default Tariff;

