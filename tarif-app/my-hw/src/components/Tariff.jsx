import React from 'react';
import './Tariff.css';

class Tariff extends React.Component {
  render() {
    const { name, price, highlighted } = this.props;
    return (
      <div className={`tariff ${highlighted ? 'highlighted' : ''}`}>
        <h3>{name}</h3>
        <p>Price: {price}р</p>
      </div>
    );
  }
}

export default Tariff;
