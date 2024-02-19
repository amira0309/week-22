import React from 'react';
import Tariff from './components/Tariff';
import './App.css';

class App extends React.Component {
  render() {
    const tariffs = [
      { name: "Безлимитный 300", price: 300, type: "basic", speed: "до 10 Мбит/сек"},
      { name: "Безлимитный 450", price: 450, type: "standard", speed: "до 50 Мбит/сек" },
      { name: "Безлимитный 550", price: 550, type: "premium", speed: "до 100 Мбит/сек" },
      { name: "Безлимитный 1000", price: 1000, type: "pro", speed: "до 200 Мбит/сек" }
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
            speed={tariff.speed}
          />
        ))}
      </div>
    );
  }
}

export default App;
