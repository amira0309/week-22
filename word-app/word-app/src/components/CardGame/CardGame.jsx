import React, { useState } from 'react';
import '../CardGame.css'; // Импортируем файл стилей для компонента CardGame

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

  const handleNextCard = () => {
    const nextCard = (currentCard + 1) % words.length;
    setCurrentCard(nextCard);
    setIsFlipped(false); // Сбрасываем состояние переворота при переключении на следующую карточку
    setLearnedCount(learnedCount + 1); // Увеличиваем счётчик изученных слов
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped); // Инвертируем состояние переворота карточки
  };

  return (
    <div className="card-game-container">
      <h2>Тренажер карточек</h2>
      <div className="card-content">
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
          <div className="card-front">
            <h3>{words[currentCard].english}</h3>
            <button onClick={handleFlipCard}>Показать перевод</button>
          </div>
          <div className="card-back">
            <h3>{words[currentCard].translation}</h3>
          </div>
        </div>
        <div className="button-container">
          {isFlipped && (
            <button onClick={handleNextCard}>Следующее слово</button>
          )}
        </div>
      </div>
      <div className="learned-count">Изучено слов: {learnedCount}</div>
    </div>
  );
};

export default CardGame;
