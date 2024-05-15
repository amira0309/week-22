import React, { useState, useEffect, useRef } from 'react';

const TextFormatter = () => {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Установка фокуса на поле ввода при загрузке компонента
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Пустой массив зависимостей означает, что эффект будет вызываться только при монтировании компонента

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormatText = () => {
    const formatted = inputText.toUpperCase();
    setFormattedText(formatted);
    setInputText('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Обработка нажатия клавиши Enter для показа перевода
      handleFormatText(); // Вызываем функцию форматирования текста при нажатии Enter
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Добавляем обработчик нажатия клавиши Enter
        ref={inputRef} // Привязываем ref к элементу ввода
        placeholder="Введите текст"
      />
      <button onClick={handleFormatText}>Форматировать</button>
      {formattedText && (
        <p style={{ textTransform: 'uppercase' }}>{formattedText}</p>
      )}
    </div>
  );
};

export default TextFormatter;
