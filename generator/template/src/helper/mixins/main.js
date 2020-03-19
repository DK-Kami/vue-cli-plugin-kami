/**
 * Место для глобальных примесей
 */

export default {
  data: () => ({
    defaultFooterProps:{
      'items-per-page-options': [25, 50, 100, { value: -1, text: 'Все' }],
    },
  }),
};