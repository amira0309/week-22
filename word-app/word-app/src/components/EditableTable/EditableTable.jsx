import React, { useState } from 'react';
import '../styles/EditableTable.css'; // Импортируем файл стилей для компонента EditableTable

const EditableTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const handleInputChange = (index, key, value) => {
    const updatedData = [...tableData];
    updatedData[index][key] = value;
    setTableData(updatedData);

    // Проверяем наличие пустых полей
    const hasEmptyField = updatedData.some((item) => item.word === '' || item.translation === '');
    setIsSaveDisabled(hasEmptyField);
  };

  const handleSaveChanges = () => {
    // Проверяем наличие пустых полей перед сохранением
    const hasEmptyField = tableData.some((item) => item.word === '' || item.translation === '');
    if (hasEmptyField) {
      alert('Необходимо заполнить все поля перед сохранением.');
      return;
    }

    // Проверяем наличие ошибок в данных перед сохранением
    const hasError = tableData.some((item) => {
      return item.word.trim() === '' || item.translation.trim() === '';
    });
    
    if (hasError) {
      alert('Одно или несколько полей содержат ошибки.');
      return;
    }

    // Выводим данные в консоль
    console.log('Сохраненные изменения:', tableData);

    // Дополнительные действия после успешного сохранения
    // Например, завершение режима редактирования
    // setEditMode(false); // Установка состояния режима редактирования в false
    // Или другие действия...

    // Сбрасываем состояние таблицы
    setTableData(data); // Сбрасываем таблицу до исходного состояния
    setIsSaveDisabled(true); // Блокируем кнопку "Сохранить"
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
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.word}
                  onChange={(e) => handleInputChange(index, 'word', e.target.value)}
                  className={item.word.trim() === '' ? 'error' : ''}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.translation}
                  onChange={(e) => handleInputChange(index, 'translation', e.target.value)}
                  className={item.translation.trim() === '' ? 'error' : ''}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveChanges} disabled={isSaveDisabled}>
        Сохранить
      </button>
    </div>
  );
};

export default EditableTable;
