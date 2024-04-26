import React, { useState } from 'react';

const CardGame = () => {
  const words = [
    { english: 'apple', translation: 'яблоко' },
    { english: 'cat', translation: 'кот' },
    { english: 'house', translation: 'дом' },
    { english: 'sun', translation: 'солнце' },
    { english: 'tree', translation: 'дерево' }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    const nextCard = (currentCard + 1) % words.length;
    setCurrentCard(nextCard);
    setIsFlipped(false); 
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <h2>Тренажер карточек</h2>
      <div className="card-container">
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="card-front">
            <h3>{words[currentCard].english}</h3>
            <button onClick={handleFlipCard}>Показать перевод</button>
          </div>
          <div className="card-back">
            <h3>{words[currentCard].translation}</h3>
            <button onClick={handleNextCard}>Следующее слово</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
