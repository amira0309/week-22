import React, { createContext, useState, useEffect } from 'react';

export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/words');
      const data = await response.json();
      setWords(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addWord = async (word) => {
    // логика для добавления слова
  };

  const updateWord = async (word) => {
    // логика для обновления слова
  };

  const deleteWord = async (id) => {
    // логика для удаления слова
  };

  return (
    <WordContext.Provider value={{ words, loading, error, addWord, updateWord, deleteWord }}>
      {children}
    </WordContext.Provider>
  );
};
