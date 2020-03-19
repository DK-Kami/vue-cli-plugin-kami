/**
 * Пример сервиса
 */

export default {
  loadExamples() {
    return this.apiClient.get('example');
  },
  loadExample(id) {
    return this.apiClient.get('example', { id });
  },
  createExample(data) {
    return this.apiClient.post('example', data);
  },
  updateExample(data) {
    return this.apiClient.put('example', data);
  },
  deleteExample(id) {
    return this.apiClient.delete('example', { id });
  },
};
