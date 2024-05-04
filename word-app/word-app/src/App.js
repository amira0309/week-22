import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import EditableTable from './components/EditableTable/EditableTable';
import CardGame from './components/CardGame/CardGame';
import WordComponents from './components/WordComponents/WordComponents';
import './styles.css';

const App = () => {
  const data = [
    { word: 'apple', translation: 'яблоко' },
    { word: 'banana', translation: 'банан' },
    { word: 'orange', translation: 'апельсин' }
  ];

  return (
    <Router>
      <div className="content-container">
        {/* Отображение меню на всех страницах */}
        <Menu />

        {/* Определение маршрутов */}
        <Routes>
          {/* Маршрут для главной страницы (компонент EditableTable) */}
          <Route path="/" element={<div>
            <h2>Слова</h2>
            <EditableTable data={data} />
          </div>} />

          {/* Маршрут для страницы с карточками (компонент CardGame) */}
          <Route path="/game" element={<CardGame />} />
        </Routes>

        {/* Дополнительные компоненты, не связанные с маршрутизацией */}
        <WordComponents />
      </div>
    </Router>
  );
};

export default App;
