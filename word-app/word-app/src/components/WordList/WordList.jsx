import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/WordList.css';

const WordList = () => {
  const [words, setWords] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newWord, setNewWord] = useState('');

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
      setWords(response.data);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://itgirlschool.justmakeit.ru/api/words/${id}`);
      const updatedWords = words.filter(word => word.id !== id);
      setWords(updatedWords);
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  };

  const handleSave = async (id, updatedWord) => {
    try {
      await axios.put(`http://itgirlschool.justmakeit.ru/api/words/${id}`, { word: updatedWord });
      setEditingId(null);
      const updatedWords = words.map(word => {
        if (word.id === id) {
          return { ...word, word: updatedWord };
        }
        return word;
      });
      setWords(updatedWords);
    } catch (error) {
      console.error('Error updating word:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const renderWordRow = (word) => {
    if (editingId === word.id) {
      return (
        <tr key={word.id}>
          <td>{word.id}</td>
          <td><input value={newWord} onChange={(e) => setNewWord(e.target.value)} /></td>
          <td>
            <button className="save-button" onClick={() => handleSave(word.id, newWord)}>Save</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={word.id}>
          <td>{word.id}</td>
          <td>{word.word}</td>
          <td>
            <button className="edit-button" onClick={() => handleEdit(word.id)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(word.id)}>Delete</button>
          </td>
        </tr>
      );
    }
  };

  return (
    <div>
      <h1>English Word List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Word</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => renderWordRow(word))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;
