/**
 * Инициализация слушателей событий роутера
 * 
 * @param {Router} router Роутер приложения
 * @param  {...any} listners Слушатели
 */

export default function initListners(router, ...listners) {
  return store => {
    listners.flat().map(listner => {
      router[listner.type](listner.listner(store));
    });
  
    return router;
  };
};
