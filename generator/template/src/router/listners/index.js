/**
 * Модуль импорта
 */

import beforeEach from './beforeEach';
import beforeResolve from './beforeResolve';

export default [
  {
    type: 'beforeEach',
    listner: beforeEach
  },
  {
    type: 'beforeResolve',
    listner: beforeResolve,
  },
];
