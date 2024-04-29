import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import EditableTable from './components/EditableTable/EditableTable';
import CardGame from './components/CardGame/CardGame';
import NavBar from './components/NavBar';
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
          <Menu />
          <NavBar />
          <Routes>
            <Route path="/" element={<div>
                <h2>Слова</h2>
                <EditableTable data={data} />
              </div>}
            />
            <Route path="/game" element={<CardGame />} />
            
            </Routes>
        </div>
    </Router>
  );
};

export default App;
