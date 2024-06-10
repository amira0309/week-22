import React, { useState } from 'react';
import "../styles/EditableTable.css";

const EditableTable = ({ data, onAdd, onUpdate, onDelete }) => {
  const [newWord, setNewWord] = useState({ english: '', russian: '', transcription: '', tags: '', tags_json: '' });

  const handleAdd = () => {
    if (newWord.english && newWord.russian && newWord.transcription) {
      onAdd({ 
        ...newWord, 
        tags: newWord.tags || '', 
        tags_json: newWord.tags_json || '' 
      });
      setNewWord({ english: '', russian: '', transcription: '', tags: '', tags_json: '' });
    }
  };

  return (
    <div>
      <div className="add-word-form">
        <input 
          type="text" 
          placeholder="English" 
          value={newWord.english} 
          onChange={(e) => setNewWord({ ...newWord, english: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Russian" 
          value={newWord.russian} 
          onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Transcription" 
          value={newWord.transcription} 
          onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Tags" 
          value={newWord.tags} 
          onChange={(e) => setNewWord({ ...newWord, tags: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Tags JSON" 
          value={newWord.tags_json} 
          onChange={(e) => setNewWord({ ...newWord, tags_json: e.target.value })} 
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Russian</th>
            <th>Transcription</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.english}</td>
              <td>{item.russian}</td>
              <td>{item.transcription}</td>
              <td>{item.tags}</td>
              <td>
                <button onClick={() => onUpdate({ ...item, english: 'new word' })}>Update</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
