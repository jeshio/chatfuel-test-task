import {State} from "../interfaces/state";
import {RequestError} from "./request-error";

export class ModuleState implements State
{
  loading: boolean;
  items?: Array<any>;
  error: RequestError = new RequestError;
}