import Vue from 'vue'
import Component from 'vue-class-component'
import {
  Action,
  namespace,
} from 'vuex-class'

const ModuleAction = namespace('users', Action);

@Component
export default class UsersList extends Vue {
  @ModuleAction getItems: any;

  public message = 'Vue works!';

  created() {
    this.getItems();
  }
}
