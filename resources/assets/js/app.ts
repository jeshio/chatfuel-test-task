import Vue from 'vue';
import App from './views/App/index.vue';
import VueRouter from "vue-router";
import VueAxios from 'vue-axios';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import vuexI18n from 'vuex-i18n';

//@ts-ignore
import Locales from './vue-i18n-locales.generated.js';
import routes from './routes';
import store from './store';
import './bootstrap';

class AppCore {
  private instance: Vue;

  // инициализация Vue
  private init() {
    Vue.use(VueRouter);
    Vue.use(VueAxios, axios);
    (Vue as any).axios.defaults.baseURL = '/api/';

    // языковые переменные
    Vue.use(vuexI18n.plugin, store);
    (Vue as any).i18n.add('en', Locales.en);
    (Vue as any).i18n.set('en');

    // роутинг
    const router = new VueRouter({
      mode: 'history',
      routes,
    });
    sync(store, router);
    Vue.router = router;

    this.instance = new Vue({
      store, router,
      el: '#app',
      render: h => h(App),
    })
  }

  constructor() {
    this.init();
  }
}

new AppCore();
