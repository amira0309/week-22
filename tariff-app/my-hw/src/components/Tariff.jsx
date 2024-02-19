import React from 'react';
import './Tariff.css';

class Tariff extends React.Component {
  render() {
    const { name, price, highlighted, type } = this.props;
    return (
      <div className={`tariff ${highlighted ? 'highlighted' : ''} ${type}`}>
        <h3>{name}</h3>
        <p>руб {price}/мес</p>
      </div>
    );
  }
}

export default Tariff;
