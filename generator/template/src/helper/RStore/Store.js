/**
 * Класс для реализация реактивности localeStorage
 */
function Store() {
  const _actions = [
    'afterUpdate',
    'beforeUpdate',
  ];
  
  const _subscribers = {};
  _actions.forEach(action => _subscribers[action] = []);

  class Store {
    constructor(name = 'RStore') {
      this.name = name;
      
      Object.defineProperty(this, 'state', {
        configurable: false,
        set: this.setStore,
        get: this.getStore,
      });
  
      window.addEventListener('storage', e => this.updateStore(e));
      document.addEventListener('DOMContentLoaded', e => this.updateStore(e));
    }
  
    /**
     * Функция инициализации состояния
     * @param {Function} initialState Функция инициализации состояния. Принимает прошлое состояние
     */
    initState(initialState) {
      if (typeof initialState === 'function') {
        return this.state = initialState(this.state);
      }
      return this.state = initialState;
    }
    /**
     * Функция для подписки на изменения состояния
     * @param {String} action Название события (beforeUpdate|afterUpdate)
     * @param {Function} callback Функция-слушатель
     */
    subscribe(action, callback) {
      if (callback.id || !_actions.includes(action)) return;
      callback.id = this.subscribe.length + 1;
      _subscribers[action].push(callback);
  
      return () => this.unsubscribe(id);
    }
    /**
     * Функция отписки от события
     * @param {int} id ID события которое было подписано
     */
    unsubscribe(id) {
      return _subscribers.filter(s => s.id !== id);
    }
  
    /**
     * Геттер хранилища
     */
    getStore() {
      const store = localStorage.getItem(this.name);
      return store && store !== 'undefined' && JSON.parse(store);
    }
    /**
     * Сеттер хранилища
     * @param {Object} newVal Новое значени хранилища
     */
    setStore(newVal) {
      const oldVal = this.getStore();
      _subscribers.beforeUpdate.forEach(callback => callback(newVal, oldVal));
      localStorage.setItem(this.name, JSON.stringify(newVal));
    }
  
    /**
     * Функция вызова всех подписчиков после изменения состояния
     * @param {StorageEvent} event Событие изменения LocaleStorage в другой вкладке
     */
    updateStore(event) {
      const newStore = this.getStore();
      _subscribers.afterUpdate.forEach(callback => callback(newStore));
    }
  };

  return new Store();
}

export default Store;
