import * as t from './actionTypes';
import {UserState} from "./state";
import {RequestError} from "../../../classes/request-error";
import UserResponses from "./responses";
import {BackendError} from "../../../classes/backend-error";


export default {
  // список
  [t.RECEIVE_ITEMS_REQUEST](state: UserState) {
    state.loading = true;
    state.error = new RequestError;
  },
  [t.RECEIVE_ITEMS_SUCCESS](state: UserState, response: UserResponses.All) {
    state.loading = false;
    state.items = response.result;
    state.previousPageUrl = response.previousPageUrl || "";
    state.nextPageUrl = response.nextPageUrl || "";
  },
  [t.RECEIVE_ITEMS_FAILURE](state: UserState, errorMessage: BackendError) {
    state.loading = false;
    state.error = new RequestError(true, errorMessage.message, errorMessage.code);
  },

  // экземпляр
  [t.RECEIVE_ITEM_REQUEST](state: UserState) {
    state.loading = true;
    state.error = new RequestError;
  },
  [t.RECEIVE_ITEM_SUCCESS](state: UserState, response: UserResponses.Detail) {
    state.loading = false;
    state.item = response.result;
  },
  [t.RECEIVE_ITEM_FAILURE](state: UserState, errorMessage: BackendError) {
    state.loading = false;
    state.error = new RequestError(true, errorMessage.message, errorMessage.code);
  },

  // обновление
  [t.EDIT_NAME](state: UserState) {
    state.editForm.name = true;
    state.error = new RequestError;
  },
  [t.CANCEL_EDIT_NAME](state: UserState) {
    state.editForm.name = false;
    state.error = new RequestError;
  },
  [t.UPDATE_ITEM_REQUEST](state: UserState) {
    state.loading = true;
    state.error = new RequestError;
  },
  [t.UPDATE_ITEM_SUCCESS](state: UserState, response: UserResponses.Update) {
    state.loading = false;
    state.item.name = response.result.name;
    state.editForm.name = false;
    // обновляем в общем списке
    const user = state.items.find(user => user.id === state.item.id);
    if (user)
      user.name = state.item.name;
  },
  [t.UPDATE_ITEM_FAILURE](state: UserState, errorMessage: BackendError) {
    state.loading = false;
    state.error = new RequestError(true, errorMessage.message, errorMessage.code, errorMessage.validationErrors);
  },

  // сброс состояния с детальной информацией
  [t.RESET_DETAIL_STATE](state: UserState) {
    const newState = new UserState;
    state.loading = newState.loading;
    state.item = newState.item;
    state.editForm = newState.editForm;
    state.error = newState.error;
  },
};