import Api from "../classes/api";

export class UsersApi extends Api {
  public static getList(cb: (response: object) => void, errorCb: (error: object) => void) {
    return this.requestGet('users', cb, errorCb);
  }
}