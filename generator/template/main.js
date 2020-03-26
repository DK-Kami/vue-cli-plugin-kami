import Vue from 'vue';
import App from './App.vue';

import WebClient from './middleware/WebClient';
import RStore from './helper/RStore';
import routerInit from './router';
import store from './store';

import mainMixin from '@/helper/mixins/main';

import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false

const router = routerInit(store);

// Доступ к роутеру и хранилищу из WebClient
WebClient.router = router;
WebClient.store = store;

//// Загрузка данных из локального хранилища
// RStore.subscribe('afterUpdate', state => {
//   store.dispatch(state ? 'auth/loginFromState' : 'unsetUserData', state);
//   if (state) router.push('/ping');
// });

Vue.mixin(mainMixin);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
