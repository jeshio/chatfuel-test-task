import {Error} from "../interfaces/error";

export class RequestError implements Error {
  status = false;
  message = "";
  code: number|null = null;

  constructor(status = false, message = "", code: number|null = null)
  {
    this.status = status;
    this.message = message;
    this.code = code;
  }
}