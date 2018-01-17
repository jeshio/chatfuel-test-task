import {User} from "./state";

namespace UserResponses {
  export interface All {
    result: Array<User>;
    previousPageUrl?: string;
    nextPageUrl?: string;
  }

  export interface Detail {
    result: User;
  }

  export interface Update {
    result: User;
  }
}
export default UserResponses;