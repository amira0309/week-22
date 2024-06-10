import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Menu from './components/Menu';
import EditableTable from './components/EditableTable/EditableTable';
import CardGame from './components/CardGame/CardGame';
import WordComponents from './components/WordComponents/WordComponents';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import wordStore from './store/WordStore';
import './styles.css';

const AppContent = observer(() => {
  const [learnedCount, setLearnedCount] = useState(0);

  React.useEffect(() => {
    wordStore.fetchWords();
  }, []);

  if (wordStore.loading) return <div>Loading...</div>;
  if (wordStore.error) return <ErrorComponent message={wordStore.error} />;

  return (
    <Router>
      <div className="content-container">
        <Menu />
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Слова</h2>
              <EditableTable 
                data={wordStore.words} 
                onAdd={wordStore.addWord.bind(wordStore)} 
                onUpdate={wordStore.updateWord.bind(wordStore)} 
                onDelete={wordStore.deleteWord.bind(wordStore)} 
              />
            </div>
          } />
          <Route path="/game" element={<CardGame words={wordStore.words} learnedCount={learnedCount} setLearnedCount={setLearnedCount} />} />
        </Routes>
        <WordComponents />
      </div>
    </Router>
  );
});

const App = () => (
  <AppContent />
);

export default App;
