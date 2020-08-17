const prompts = [
  {
    // основные свойства интерактивных подсказок
    name: `addExampleRoutes`,
    type: 'confirm',
    message: 'Добавить примеры маршрутов?',
    default: false,
    // свойства интерактивных подсказок для UI
    group: 'Настоятельно рекомендуется',
    description: 'Добавить примеры страниц, шаблонов и конфигурацию маршрутизатора',
    link: 'https://github.com/ktsn/vue-cli-plugin-auto-routing/#vue-cli-plugin-auto-routing'
  },
];

module.exports = prompts;
