/**
 * @typedef {Object} VuexModuleConfig
 * 
 * @property {Function} initialState Функция, возвращающая начальное состояние модуля
 * @property {Boolean} namespaced Выводит модуль в пространство имён
 * @property {Object} mutations Мутации модуля
 * @property {Object} actions Действия модуля
 * @property {Object} getters Геттеры модуля
 */

/**
 * Создание конфигуриемумого Vuex модуля
 * @param {VuexModuleConfig} module Конфигурация модуля
 */
function VuexModule({ mutations = {}, namespaced = true, initialState, actions, getters }) {
  if (typeof initialState !== 'function') {
    return new TypeError('initialState is not a function');
  }

  this.mutations = {
    UNSET_DATA: state => Object.assign(state, initialState()),
    ...mutations,
  };
  this.state = initialState();
  this.namespaced = namespaced;
  this.actions = actions;
  this.getters = getters;

  return true;
}

export default VuexModule;
