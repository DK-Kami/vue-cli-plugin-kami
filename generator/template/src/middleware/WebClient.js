import axios from 'axios';


/**
 * Класс для работы c API
 */
class WebClient {
  /**
   * Конструктор класс
   * @param {String} baseURL Базовый url бекэнда
   */
  constructor(baseURL) {
    this.baseURL = baseURL;

    this.store = null;
    this.router = null;

    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });

    this.setInterceptors();
  }

  /**
   * Установка обработчиков 
   */
  setInterceptors() {
    this.axios.interceptors.response.use(response => {
      /// Постобработка усппешных запросов
      return Promise.resolve(response);
    }, error => {
      /// Постобработка не усппешных запросов
      return Promise.reject(error);
    });
  }

  /**
   * Метод установки заголовка авторизации после входа пользователем в приложение
   * @param {String} token Токен авторизации
   */
  login(token) {
    this.axios.defaults.headers.common['authorization'] = 'Bearer ' + token;
  }
  /**
   * Метод очистки заголовка авторизации при выходе пользователя из приложения
   */
  logout() {
    delete this.axios.defaults.headers.common['authorization'];
  }

  get(url, params) {
    return this.axios.get(url, {
      params,
    })
  }
  post(url, data, params) {
    return this.axios.post(url, data, {
      params,
    })
  }
  put(url, data, params) {
    return this.axios.put(url, data, {
      params,
    })
  }
  delete(url, data, params) {
    return this.axios.delete(url, {
      params,
      data,
    })
  }
  request(url, config) {
    return this.axios.request({
      url,
      ...config
    });
  }
};

/**
 * URL API
 */
const url = '';
export default new WebClient(url);
