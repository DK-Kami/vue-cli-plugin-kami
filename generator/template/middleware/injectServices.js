/**
 * Инъекция класса работы с API в каждый сервис
 * @param {WebClient} apiClient Класс работы с API
 * @param {module} service Сервис приложения
 */

export default function(apiClient, service) {
  Object.defineProperty(service, 'apiClient', {
    value: apiClient,
  });
};
