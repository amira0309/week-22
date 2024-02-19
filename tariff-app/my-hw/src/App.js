import React from 'react';
import Tariff from './components/Tariff';
import './App.css';

class App extends React.Component {
  render() {
    const tariffs = [
      { name: "Безлимитный 300", price: 300, type: "basic" },
      { name: "Безлимитный 450", price: 450, type: "standard" },
      { name: "Безлимитный 550", price: 550, type: "premium" },
      { name: "Безлимитный 1000", price: 1000, type: "pro" }
    ];

    return (
      <div className="App">
        {tariffs.map((tariff, index) => (
          <Tariff
            key={index}
            name={tariff.name}
            price={tariff.price}
            highlighted={tariff.price === 550}
            type={tariff.type}
          />
        ))}
      </div>
    );
  }
}

export default App;
