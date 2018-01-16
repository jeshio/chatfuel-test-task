import {Error} from "./error";

export interface State
{
  loading: boolean;
  items?: Array<any>;
  error: Error;
}