import React from 'react';
import './App.css';

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

class App extends React.Component {
  render() {
    const tariffs = [
      { name: "Безлимитный 300", price: 300 "руб в мес" },
      { name: "Безлимитный 450", price: 450 "руб в мес"},
      { name: "Безлимитный 550", price: 550 "руб в мес"},
      { name: "Безлимитный 1000", price: 700 "руб в мес"}
    ];

    return (
      <div className="App">
        {tariffs.map((tariff, index) => (
          <Tariff
            key={index}
            name={tariff.name}
            price={tariff.price}
            highlighted={tariff.price === 550}
          />
        ))}
      </div>
    );
  }
}

export default App;
