import Vue from 'vue'
import Component from 'vue-class-component'
import {
  Action,
  State,
  namespace,
} from 'vuex-class'
import {User} from "../../../store/modules/users/state";

const ModuleAction = namespace('users', Action);
const ModuleState = namespace('users', State);

@Component
export default class UsersList extends Vue {
  @ModuleAction getItems: any;
  @ModuleAction prevPage: any;
  @ModuleAction nextPage: any;
  @ModuleState items: Array<User>;
  @ModuleState previousPageUrl: string;
  @ModuleState nextPageUrl: string;

  created() {
    this.getItems();
  }
}
