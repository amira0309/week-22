import React from 'react';
import './Tariff.css';

class Tariff extends React.Component {
  render() {
    const { name, price, highlighted, type } = this.props;
    return (
      <div className={`Tariff ${highlighted ? 'highlighted' : ''} ${type}`}>
        <h3>{name}</h3>
        <p>Price: {price}р</p>
      </div>
    );
  }
}

export default Tariff;
ss
