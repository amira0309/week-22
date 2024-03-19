import React from 'react';
import WordCarousel from './components/WordCarousel/WordCarousel';
import EditableTable from './components/EditableTable/EditableTable';

export default function App() {
  const data = [
    { word: 'apple', translation: 'яблоко' },
    { word: 'banana', translation: 'банан' },
    { word: 'orange', translation: 'апельсин' }
  ];

  return (
    <div>
      <h2>Слова</h2>
      <WordCarousel words={data} />
      
      <h2>Таблица</h2>
      <EditableTable data={data} />
    </div>
  );
}
