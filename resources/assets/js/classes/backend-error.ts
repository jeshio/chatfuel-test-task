import {Error} from "../interfaces/error";

/**
 * Класс ошибки с бэкэнда
 */
export class BackendError implements Error {
  message = "";
  code: number|null = null;
  validationErrors: {[name: string]: Array<string>} = {};

  constructor(message = "", code: number|null = null, validationErrors = {})
  {
    this.message = message;
    this.code = code;
    this.validationErrors = validationErrors;
  }
}