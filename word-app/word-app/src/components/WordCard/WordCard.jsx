import React, { useState } from 'react';

const WordCard = ({ word, translation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div>
      <div>Слово: {word}</div>
      {showTranslation && <div>Перевод: {translation}</div>}
      {!showTranslation && <button onClick={handleShowTranslation}>Показать перевод</button>}
    </div>
  );
};

export default WordCard;

