const generator = (api) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.19.0",
      "vue-the-mask": "^0.11.1",
    },
    devDependencies: {
      "@vue/cli-plugin-router": "^4.2.0",
      "@vue/cli-plugin-vuex": "^4.2.0",
    }
  });

  api.render('./template');
};

generator.hooks = (api) => {
  api.afterInvoke(() => {
    const fs = require('fs');
    const contentMain = fs.readFileSync('./main.js', { encoding: 'utf-8' });

    fs.writeFileSync(api.entryFile, contentMain, { encoding: 'utf-8' })
  });
};

module.exports = generator;
