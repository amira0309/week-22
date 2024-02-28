import React, { useState } from 'react';
import Tariff from './components/Tariff/Tariff';
import './App.css';

const App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
    { name: "Безлимитный 300", price: 300, type: "basic", speed: "до 10 Мбит/сек"},
    { name: "Безлимитный 450", price: 450, type: "standard", speed: "до 50 Мбит/сек" },
    { name: "Безлимитный 550", price: 550, type: "premium", speed: "до 100 Мбит/сек" },
    { name: "Безлимитный 1000", price: 1000, type: "pro", speed: "до 200 Мбит/сек" }
  ];

  const handleTariffClick = (index) => {
    setSelectedTariff(index);
  };

  return (
    <div className="App">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          name={tariff.name}
          price={tariff.price}
          highlighted={selectedTariff === index}
          type={tariff.type}
          speed={tariff.speed}
          onClick={() => handleTariffClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
