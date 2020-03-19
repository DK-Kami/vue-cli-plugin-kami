const generator = (api, options, preset) => {
  api.render('./template');

  api.extendPackage({
    dependencies: {
      "axios": "^0.19.0",
      "chart.js": "^2.9.3",
      "vue-router": "^3.1.3",
      "vue-the-mask": "^0.11.1",
      "vuetify": "^2.1.0",
      "vuex": "^3.1.2"
    },
    devDependencies: {
      "@mdi/font": "^4.7.95",
      "@vue/cli-plugin-router": "^4.2.0",
      "@vue/cli-plugin-vuex": "^4.2.0",
      "vue-cli-plugin-vuetify": "^2.0.2",
      "vuetify-loader": "^1.3.0",
    }
  })
};

module.exports = generator;
