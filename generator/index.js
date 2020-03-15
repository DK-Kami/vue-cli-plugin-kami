const generator = (api, options, preset) => {
  api.render('./template/components/base');
  api.render('./template/components/helper');
  api.render('./template/components/layout');

  // if (options.charts) {
  //   api.extendPackage({
  //     dependencies: {
  //       'chart.js': '^2.9.3',
  //     },
  //   });
  //   api.render('./template/components/charts');
  // }
};

module.exports = generator;
