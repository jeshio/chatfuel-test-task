import {User} from "./state";

namespace UserResponses {
  export interface All {
    result: Array<User>;
    prevPageUrl?: string;
    nextPageUrl?: string;
  }
}
export default UserResponses;