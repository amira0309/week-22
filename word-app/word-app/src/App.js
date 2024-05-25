// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import EditableTable from './components/EditableTable/EditableTable';
import CardGame from './components/CardGame/CardGame';
import WordComponents from './components/WordComponents/WordComponents';
import { WordProvider, WordContext } from './context/WordContext';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import './styles.css';

const App = () => {
  const { words, loading, error } = useContext(WordContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorComponent message={error} />;

  return (
    <WordProvider>
      <Router>
        <div className="content-container">
          <Menu />
          <Routes>
            <Route path="/" element={<div>
              <h2>Слова</h2>
              <EditableTable data={words} />
            </div>} />
            <Route path="/game" element={<CardGame />} />
          </Routes>
          <WordComponents />
        </div>
      </Router>
    </WordProvider>
  );
};

export default App;
