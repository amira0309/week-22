import { makeObservable, observable, action, runInAction } from 'mobx';

class WordStore {
  words = [];
  loading = false;
  error = null;
  learnedCount = 0; // Добавляем счетчик изученных слов

  constructor() {
    makeObservable(this, {
      words: observable,
      loading: observable,
      error: observable,
      learnedCount: observable, // Объявляем счетчик как observable
      fetchWords: action,
      addWord: action,
      updateWord: action,
      deleteWord: action,
      incrementLearnedCount: action, // Добавляем метод для увеличения счетчика
    });
  }


  async fetchWords() {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      runInAction(() => {
        this.words = data;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Failed to fetch words';
        this.loading = false;
      });
    }
  }

  addWord(word) {
    this.words.push(word);
  }

  updateWord(updatedWord) {
    const index = this.words.findIndex(word => word.id === updatedWord.id);
    if (index !== -1) {
      this.words[index] = updatedWord;
    }
  }

  deleteWord(id) {
    this.words = this.words.filter(word => word.id !== id);
  }

  incrementLearnedCount() {
    this.learnedCount++;
  }
}

const wordStore = new WordStore();
export default wordStore;


