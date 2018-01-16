import * as t from './actionTypes';
import {ActionContext} from "vuex";
import {UserState} from "./state";
import {UsersApi} from "../../../api/UsersApi";

export default {
  getItems(store: ActionContext<UserState, any>) {
    store.commit(t.RECEIVE_ITEMS_REQUEST);
    return UsersApi.getList((response) => {
      store.commit(t.RECEIVE_ITEMS_SUCCESS, response);
    }, (error) => {
      store.commit(t.RECEIVE_ITEMS_FAILURE, error);
    });
  }
};
