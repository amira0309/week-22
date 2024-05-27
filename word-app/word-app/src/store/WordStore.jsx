import { makeAutoObservable } from 'mobx';

class WordStore {
  words = [];
  loading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    this.loading = true;
    try {
      const response = await fetch('/api/words'); // Предполагается, что ваш API возвращает список слов
      const data = await response.json();
      this.words = data;
      this.loading = false;
    } catch (err) {
      this.error = err.message;
      this.loading = false;
    }
  }

  async addWord(word) {
    try {
      const response = await fetch('/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
      });
      const newWord = await response.json();
      this.words.push(newWord);
    } catch (err) {
      this.error = err.message;
    }
  }

  async updateWord(updatedWord) {
    try {
      await fetch(`/api/words/${updatedWord.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWord),
      });
      this.words = this.words.map((word) => (word.id === updatedWord.id ? updatedWord : word));
    } catch (err) {
      this.error = err.message;
    }
  }

  async deleteWord(wordId) {
    try {
      await fetch(`/api/words/${wordId}`, {
        method: 'DELETE',
      });
      this.words = this.words.filter((word) => word.id !== wordId);
    } catch (err) {
      this.error = err.message;
    }
  }
}

const wordStore = new WordStore();
export default wordStore;
