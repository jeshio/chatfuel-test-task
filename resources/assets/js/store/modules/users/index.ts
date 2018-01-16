import {Module} from "vuex";
import {UserState} from "./state";
import Mutations from './mutations'
import Actions from './actions'

export class Users implements Module<UserState, any> {
  namespaced: boolean = true;

  state: UserState = new UserState;
  mutations = Mutations;
  actions = Actions;
}