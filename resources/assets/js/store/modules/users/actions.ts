import * as t from './actionTypes';
import {ActionContext} from "vuex";
import {UserState} from "./state";
import {UsersApi} from "../../../api/UsersApi";

export default {
  getItems(store: ActionContext<UserState, any>, url: string|undefined = undefined) {
    store.commit(t.RECEIVE_ITEMS_REQUEST);
    return UsersApi.getList((response) => {
      store.commit(t.RECEIVE_ITEMS_SUCCESS, response);
    }, (error) => {
      store.commit(t.RECEIVE_ITEMS_FAILURE, error);
    }, url);
  },
  prevPage(store: ActionContext<UserState, any>) {
    store.dispatch('getItems', store.state.previousPageUrl);
  },
  nextPage(store: ActionContext<UserState, any>) {
    store.dispatch('getItems', store.state.nextPageUrl);
  },
  getItem(store: ActionContext<UserState, any>, id: number) {
    store.commit(t.RECEIVE_ITEM_REQUEST);
    return UsersApi.getOne((response) => {
      store.commit(t.RECEIVE_ITEM_SUCCESS, response);
    }, (error) => {
      store.commit(t.RECEIVE_ITEM_FAILURE, error);
    }, id);
  },
  editName(store: ActionContext<UserState, any>) {
    store.commit(t.EDIT_NAME);
  },
  cancelEdit(store: ActionContext<UserState, any>) {
    store.commit(t.CANCEL_EDIT_NAME);
  },
  saveName(store: ActionContext<UserState, any>, payload: { id: number, name: string }) {
    store.commit(t.UPDATE_ITEM_REQUEST);
    return new Promise((resolve, reject) =>
      UsersApi.update((response) => {
        store.commit(t.UPDATE_ITEM_SUCCESS, response);
        resolve();
      }, (error) => {
        store.commit(t.UPDATE_ITEM_FAILURE, error);
        reject();
      }, payload.id, { name: payload.name })
    );
  },
  /**
   * Сбрасывает состояние
   */
  resetState(store: ActionContext<UserState, any>) {
    store.commit(t.RESET_STATE);
  }
};
