import {ModuleState} from "../../../classes/module-state";

export interface User
{
  id: number;
  name: string;
  avatarUrl: string;
}

export class UserState extends ModuleState{
  items: Array<User> = [];
}