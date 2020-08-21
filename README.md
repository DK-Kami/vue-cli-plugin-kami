## About

🦊 Preset for Vue application. With with a **ready-made architecture**

## Install

For usage copy and paste it in your directory console

`vue add vue-cli-plugin-kami`

## Architecture

Application architecture

![Application architecture](docs/architecture.png)

### Directory Structure

Generator has created these files:

```js
src
├── helper
│   └── mixins
│       ├── dialog.js             👈 mixin for dialog components
│       └── main.js               👈 file with all mixins!
├── middleware
│   ├── WebClient.js              👈 axios config
│   └── services                  👈 All app services
│       └── ExampleService.js
├── router
│   ├── index.js
│   ├── initListners.js           👈 inject all listners in router instance
│   ├── routes
│   └── listners
│       ├── beforeEach.js         👈 Hook before page started load
│       ├── beforeResolve.js      👈 Hook after all router hook has been resolved
│       └── index.js
└── store
    ├── index.js
    ├── VuexModule.js             👈 Сlass that describes all Veux modules
    └── modules
        ├── example.js
        └── index.js
```

If you agreed to create a demo component, you will also see `TestMe` component in `src/components` folder.
