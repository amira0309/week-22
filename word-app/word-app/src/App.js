import './App.css';
import React from "react";
import WordList from './components/WordList';
import WordCard from './components/WordCard';

function App() {
  return (
    <div className="App">
      <h1>Изучение иностранных слов</h1>
      <WordList />
      <WordCard />
      
    </div>
  );
}

export default App;
