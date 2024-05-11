import React, { useState } from 'react';

const TextFormatter = () => {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormatText = () => {
    const formatted = inputText.toUpperCase(); 
    setFormattedText(formatted);
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={handleFormatText}>Добавить</button>
      {formattedText && (
        <p style={{ textTransform: 'uppercase' }}>{formattedText}</p>
      )}
    </div>
  );
};

export default TextFormatter;
