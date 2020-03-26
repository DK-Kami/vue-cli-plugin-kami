module.exports = api => {
  api.describeConfig({
    // Уникальный ID для конфигурации
    id: 'vue-cli-plugin-kami.KamiMeow.github.com',
    // Отображаемое имя
    name: 'Настройка приветствия',
    // Описание, отображаемое под именем
    description: 'Можно настроить цвет текста приветствия',
    // Ссылка «More info»
    link: 'https://github.com/KamiMeow/vue-cli-plugin-kami#readme',
    // Значок конфигурации
    icon: 'color_lens',

    onRead: ({ data }) => ({
      prompts: [
        {
          name: `color`,
          type: 'input',
          message: 'Цвет сообщения с приветствием',
          value: data.config && data.config.color,
          default: 'black',
        },
      ],
    }),
    onWrite: ({ data }) => {},
  });
};