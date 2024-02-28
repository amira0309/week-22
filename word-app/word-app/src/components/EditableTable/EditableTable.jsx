import React, { useState } from 'react';

const EditableTable = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newData = [...editedData];
    newData[index][name] = value;
    setEditedData(newData);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedData(data);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Перевод</th>
          </tr>
        </thead>
        <tbody>
          {editedData.map((item, index) => (
            <tr key={index}>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="word"
                    value={item.word}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  item.word
                )}
              </td>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="translation"
                    value={item.translation}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  item.translation
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editMode ? (
        <div>
          <button onClick={handleCancelEdit}>Отмена редактирования</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEdit}>Редактировать</button>
        </div>
      )}
    </div>
  );
};

export default EditableTable;
