import * as t from './actionTypes';
import {UserState} from "./state";
import {RequestError} from "../../../classes/request-error";
import UserResponses from "./responses";


export default {
  [t.RECEIVE_ITEMS_REQUEST](state: UserState) {
    state.loading = true;
    state.error = new RequestError;
  },
  [t.RECEIVE_ITEMS_SUCCESS](state: UserState, result: UserResponses.All) {
    state.loading = false;
    state.items = result.result;
  },
  [t.RECEIVE_ITEMS_FAILURE](state: UserState, errorMessage: { code: number|null, message: string }) {
    state.loading = false;
    state.error = new RequestError(true, errorMessage.message, errorMessage.code);
  },
};