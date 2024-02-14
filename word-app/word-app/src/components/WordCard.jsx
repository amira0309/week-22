import React from "react";
import "./styles/WordCard.css";

function WordCard({ term, transcription, translation, theme }) {
  return (
    <div className="WordCard">
      <h3>{term}</h3>
      <p><strong>Транскрипция:</strong> {transcription}</p>
      <p><strong>Перевод:</strong> {translation}</p>
      <p><strong>Тема:</strong> {theme}</p>
      {/* кнопки для удаления и редактирования */}
    </div>
  );
}

export default WordCard;
