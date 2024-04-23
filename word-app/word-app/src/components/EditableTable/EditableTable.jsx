import React from 'react';

const EditableTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Перевод</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.word}</td>
            <td>{item.translation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;
