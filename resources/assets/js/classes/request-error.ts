import {Error} from "../interfaces/error";

/**
 * Класс обработанной ошибки, полученной с запроса
 */
export class RequestError implements Error {
  status = false;
  message = "";
  code: number|null = null;
  validationErrors: {[name: string]: Array<string>} = {};

  constructor(status = false, message = "", code: number|null = null, validationErrors = {})
  {
    this.status = status;
    this.message = message;
    this.code = code;
    this.validationErrors = validationErrors;
  }
}