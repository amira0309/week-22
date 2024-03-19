import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WordCard from '../WordCard/WordCard';
import './WordCarousel.css'; 

const WordCarousel = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
  };

  if (!words || words.length === 0) {
    return <div>Слова не найдены</div>;
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div>
        <button onClick={handlePrevWord}>←</button>
        <TransitionGroup>
          <CSSTransition key={currentWordIndex} classNames="slide" timeout={300}>
            <div>
              <WordCard word={words[currentWordIndex].word} translation={words[currentWordIndex].translation} />
            </div>
          </CSSTransition>
        </TransitionGroup>
        <button onClick={handleNextWord}>→</button>
      </div>
    </div>
  );
};

WordCarousel.defaultProps = {
  words: [],
};

export default WordCarousel;
