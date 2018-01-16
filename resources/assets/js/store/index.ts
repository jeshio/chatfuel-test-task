import Vue from 'vue';
import Vuex from 'vuex';
import State from './state';

import createLogger from 'vuex/dist/logger';
import {Users} from "./modules/users";

//@ts-ignore
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);


export default new Vuex.Store<State>({
  strict: debug,
  plugins: debug ? [createLogger({})] : [],
  modules: {
    users: new Users,
  },
});
