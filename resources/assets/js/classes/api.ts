import Vue from 'vue';
import {AxiosResponse} from "axios";
import {BackendError} from "./backend-error";

/**
 * Класс для выполнения запросов и первичной обработки полученного ответа
 */
export default class Api {
  private static getBackendErrorFromResponse(error: AxiosResponse): BackendError {
    return new BackendError((error as any).response.statusText, (error as any).response.status, (error as any).response.data.messages || {});
  }

  protected static requestGet(url: string, cb: (response: AxiosResponse) => void, errorCb: (error: BackendError) => void, request: object = {}) {
    return Vue.axios.get(url, request)
      .then((response: AxiosResponse) => cb(response.data))
      .catch((error: AxiosResponse) => errorCb(this.getBackendErrorFromResponse(error)));
  }

  protected static requestPost(url: string, cb: (response: AxiosResponse) => void, errorCb: (error: BackendError) => void, request: object = {}) {
    return Vue.axios.post(url, request)
      .then((response: AxiosResponse) => cb(response.data))
      .catch((error: AxiosResponse) => errorCb(this.getBackendErrorFromResponse(error)));
  }
}