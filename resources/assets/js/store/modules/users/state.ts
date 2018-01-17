import {ModuleState} from "../../../classes/module-state";

export interface User
{
  id?: number;
  name: string;
  avatarUrl: string;
}

export class UserState extends ModuleState {
  [key: string]: any; // для доступа к динамическам свойствам
  
  item: User = {
    id: undefined,
    name: "",
    avatarUrl: "",
  };
  items: Array<User> = [];
  previousPageUrl: string = "";
  nextPageUrl: string = "";
  editForm = {
    name: false,
  }
}