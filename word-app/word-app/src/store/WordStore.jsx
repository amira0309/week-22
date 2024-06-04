
import { makeAutoObservable } from 'mobx';

class WordStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    this.loading = true;
    try {
      const response = await fetch('/api/words');
      const data = await response.json();
      this.words = data;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }

  async addWord(newWord) {
    try {
      const response = await fetch('/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWord),
      });
      const data = await response.json();
      this.words.push(data);
    } catch (error) {
      console.error('Error adding word:', error);
    }
  }

  async updateWord(updatedWord) {
    try {
      const response = await fetch(`/api/words/${updatedWord.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWord),
      });
      const data = await response.json();
      const index = this.words.findIndex(word => word.id === updatedWord.id);
      this.words[index] = data;
    } catch (error) {
      console.error('Error updating word:', error);
    }
  }

  async deleteWord(id) {
    try {
      await fetch(`/api/words/${id}`, {
        method: 'DELETE',
      });
      this.words = this.words.filter(word => word.id !== id);
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  }
}

const wordStore = new WordStore(); // Назначаем экземпляр класса переменной

export default wordStore; // Экспортируем переменную, а не анонимный экземпляр класса
