/**
 * Модуль уведомлений VueX
 */

export const initialState = () => ({
  show: false,
  message: '',
  type: '',
});

export const mutations = {
  SET(state, { type, message }) {
    state.type = type;
    state.message = message;
  },
  CHANGE_SHOW: (state, show) => state.show = show,
};
export const actions = {
  /**
   * Вызов уведомлений в приложении
   * 
   * @param {Object} notification Объект уведомления, должен быть следующего вида:
   * @example {
   *   type {String: 'error' | 'info' | 'success' | 'warning' | 'primary' | 'accent'}: Определяет тип уведомления
   *   message {String}: Сообщение, отображаемое в уведомлении
   * }
   */
  set({ commit }, notification) {
    commit('SET', notification);
    commit('CHANGE_SHOW', true);
  },
};
