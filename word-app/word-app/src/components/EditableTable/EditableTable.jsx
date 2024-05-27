import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

const EditableTable = observer(({ data, onAdd, onUpdate, onDelete }) => {
  const [newWord, setNewWord] = useState({ text: '', translation: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWord({ ...newWord, [name]: value });
  };

  const handleAdd = () => {
    if (newWord.text && newWord.translation) {
      onAdd(newWord);
      setNewWord({ text: '', translation: '' });
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((word) => (
            <tr key={word.id}>
              <td>{word.text}</td>
              <td>{word.translation}</td>
              <td>
                <button onClick={() => onDelete(word.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input name="text" value={newWord.text} onChange={handleInputChange} /></td>
            <td><input name="translation" value={newWord.translation} onChange={handleInputChange} /></td>
            <td><button onClick={handleAdd}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default EditableTable;
