import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Menu from './components/Menu';
import EditableTable from './components/EditableTable/EditableTable';
import CardGame from './components/CardGame/CardGame';
import WordComponents from './components/WordComponents/WordComponents';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import wordStore from './store/WordStore';
import './styles.css';

const App = observer(() => {
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
          <Route path="/" element={<div>
            <h2>Слова</h2>
            <EditableTable data={wordStore.words} onAdd={wordStore.addWord} onUpdate={wordStore.updateWord} onDelete={wordStore.deleteWord} />
          </div>} />
          <Route path="/game" element={<CardGame />} />
        </Routes>
        <WordComponents />
      </div>
    </Router>
  );
});

export default App;
