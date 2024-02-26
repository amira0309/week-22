import React from 'react';
import WordCard from './components/WordCard'; 
import EditableTable from './components/EditableTable'; 

export default function App() {
  const data = [
    { word: 'apple', translation: 'яблоко' },
    { word: 'banana', translation: 'банан' },
    { word: 'orange', translation: 'апельсин' }
  ];

  return (
    <div>
      <h2>Слова</h2>
      <WordCard word="apple" translation="яблоко" />
      <WordCard word="banana" translation="банан" />
      <WordCard word="orange" translation="апельсин" />
      
      <h2>Таблица</h2>
      <EditableTable data={data} />
    </div>
  );
}
