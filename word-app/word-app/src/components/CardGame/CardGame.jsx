import React, { useState } from 'react';
import './CardGame.css'; // Подключаем файл стилей для компонента CardGame

const CardGame = ({ learnedCount, setLearnedCount }) => {
  const words = [
    { english: 'apple', translation: 'яблоко' },
    { english: 'cat', translation: 'кот' },
    { english: 'house', translation: 'дом' },
    { english: 'sun', translation: 'солнце' },
    { english: 'tree', translation: 'дерево' }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNextCard = () => {
    const nextCard = (currentCard + 1) % words.length;
    setCurrentCard(nextCard);
    setIsFlipped(false);
    setShowTranslation(false);
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setLearnedCount(learnedCount + 1);
    }
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="card-game-container">
      <h2>Тренажер карточек</h2>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front">
          <h3>{words[currentCard].english}</h3>
          <button onClick={handleFlipCard}>Показать перевод</button>
        </div>
        <div className="card-back">
          <h3>{showTranslation ? words[currentCard].translation : ''}</h3>
          <button onClick={handleNextCard}>Следующее слово</button>
        </div>
      </div>
      <button onClick={handleShowTranslation}>Показать перевод</button>
      <p>Изучено слов: {learnedCount}</p>
    </div>
  );
};

export default CardGame;
