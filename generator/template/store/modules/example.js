/**
 * Пример модуля VueX
 */

import services from "@/middleware";
const { ExampleService } = services;

export const initialState = () => ({
  examples: [],
});

export const mutations = {
  SET_EXAMPLES: (state, examples) => state.examples = examples,
};

export const actions = {
  async loadExamples({ commit }) {
    const examples = (await ExampleService.loadExamples()).data;
    commit('SET_EXAMPLES', examples)
    return { error: false };
  }
};

export const getters = {
  getExamples: state => state.examples,
};
