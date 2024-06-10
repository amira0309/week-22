import React, { useState } from 'react';
import wordStore from '../store/WordStore';

const AddWordForm = () => {
  const [newWord, setNewWord] = useState({
    english: '',
    russian: '',
    transcription: '',
    tags: '',
    tags_json: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWord({ ...newWord, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newWord.english || !newWord.russian || !newWord.transcription) {
      alert('Все поля формы должны быть заполнены');
      return;
    }
    wordStore.addWord(newWord);
    setNewWord({
      english: '',
      russian: '',
      transcription: '',
      tags: '',
      tags_json: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="english" value={newWord.english} onChange={handleChange} placeholder="English" />
      <input name="russian" value={newWord.russian} onChange={handleChange} placeholder="Russian" />
      <input name="transcription" value={newWord.transcription} onChange={handleChange} placeholder="Transcription" />
      <input name="tags" value={newWord.tags} onChange={handleChange} placeholder="Tags" />
      <input name="tags_json" value={newWord.tags_json} onChange={handleChange} placeholder="Tags JSON" />
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default AddWordForm;
