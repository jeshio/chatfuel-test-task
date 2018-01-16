import Vue from 'vue';
import Vuex from 'vuex';
import Store from './state';

import createLogger from 'vuex/dist/logger';

//@ts-ignore
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);


export default new Vuex.Store<Store>({
  strict: debug,
  plugins: debug ? [createLogger({})] : [],
});
