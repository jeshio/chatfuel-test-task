import Api from "../classes/api";

/**
 * Класс для выполнения запросов к сущности "Пользователи"
 */
export class UsersApi extends Api {
  public static getList(cb: (response: object) => void, errorCb: (error: object) => void, url: string|undefined = undefined) {
    return this.requestGet(url || 'users', cb, errorCb);
  }

  public static getOne(cb: (response: object) => void, errorCb: (error: object) => void, id: number) {
    return this.requestGet(`users/${id}`, cb, errorCb);
  }

  public static update(cb: (response: object) => void, errorCb: (error: object) => void, id: number, request: object) {
    return this.requestPost(`users/${id}`, cb, errorCb, request);
  }
}