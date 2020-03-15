/**
 * Модуль хранилища
 */

import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import initialModules from './initialModules';

Vue.use(Vuex);

/**
 * Первичное состояние.
 * Вынесено в отдельную функцию, для быстрого возврата в начальное состояние
 */
const initialState = () => ({
  // Правила для валидации полей формы
  rules: {
    required: v => {
      const value = (typeof v === 'number') ? v.toString() : v;
      return (!!value && !!value.length) || 'Обязательно для заполнения';
    },
    range: ({ min, max }) => {
      return value => {
        if (!Number.isInteger(+value)) return 'Значение должно быть числом';
        if (value < min) return 'Значение должно быть больше ' + min;
        return value <= max || 'Значение не должно превышать ' + max;
      }
    },
    email: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || 'Неправильный e-mail.'
    },
    min: type => {
      const message = 'Недостаточно символов';
      switch(type) {
        case 'phone':
          return v => (v + '').length === 18 || message;

        default:
          return true;
      };
    }
  },
});

const vuex = new Vuex.Store({
  state: initialState,
  mutations: {
    // Общие мутации
  },
  actions: {
    // Общие экшены
  },
  getters: {
    // Общие геттеры
  },
  modules: initialModules(modules),
});

export default vuex;
