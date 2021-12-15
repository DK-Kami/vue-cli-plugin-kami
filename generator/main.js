import Vue from 'vue';
import App from './App.vue';

import WebClient from './middleware/WebClient';
import routerInit from './router';
import store from './store';

import mainMixin from '@/helper/mixins/main';

Vue.config.productionTip = false

const router = routerInit(store);

// Доступ к роутеру и хранилищу из WebClient
WebClient.router = router;
WebClient.store = store;

Vue.mixin(mainMixin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
