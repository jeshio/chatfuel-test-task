import {State} from "../interfaces/state";
import {RequestError} from "./request-error";

/**
 * Родительский класс стейтов в модулях
 */
export class ModuleState implements State
{
  loading: boolean = false;
  items?: Array<any> = [];
  error: RequestError = new RequestError;
}