// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import EditableTable from './components/EditableTable/EditableTable';
import CardGame from './components/CardGame/CardGame';
import './styles.css'; 

const App = () => {
  const data = [
    { word: 'apple', translation: 'яблоко' },
    { word: 'banana', translation: 'банан' },
    { word: 'orange', translation: 'апельсин' }
  ];

  return (
    <Router>
      <div>
        <Menu /> 
        <div className="content-container">
          <Routes>
            <Route path="/" exact>
              <div>
                <h2>Слова</h2>
                <EditableTable data={data} />
              </div>
            </Route>
            <Route path="/game">
              <CardGame />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
