import Vue from 'vue';
import {AxiosResponse} from "axios";

export default class Api {
  private static formatResponseError(error: AxiosResponse) {
    return {
      code: (error as any).response.status,
      message: (error as any).response.statusText,
    };
  }

  protected static requestGet(url: string, cb: (response: object) => void, errorCb: (error: object) => void, request: object = {}) {
    return Vue.axios.get(url, request)
      .then((response: AxiosResponse) => cb(response.data))
      .catch((error: AxiosResponse) => errorCb(this.formatResponseError(error)));
  }
}