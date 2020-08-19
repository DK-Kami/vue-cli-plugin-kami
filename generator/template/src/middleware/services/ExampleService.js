/**
 * Пример сервиса
 */
import webClient from '@mdw/WebClient';

export default {
  loadExamples() {
    return webClient.get('example');
  },
  loadExample(id) {
    return webClient.get('example', { id });
  },
  createExample(data) {
    return webClient.post('example', data);
  },
  updateExample(data) {
    return webClient.put('example', data);
  },
  deleteExample(id) {
    return webClient.delete('example', { id });
  },
};
