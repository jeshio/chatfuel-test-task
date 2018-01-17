import Vue from 'vue'
import Component from 'vue-class-component'
import { Form } from 'vform';
import {
  Action,
  State,
  namespace,
} from 'vuex-class'
import {User} from "../../../store/modules/users/state";
import {RequestError} from "../../../classes/request-error";
import {Route} from "vue-router";

const ModuleAction = namespace('users', Action);
const ModuleState = namespace('users', State);

@Component
export default class UsersDetail extends Vue {
  @ModuleAction getItem: any;
  @ModuleAction editName: any;
  @ModuleAction cancelEdit: any;
  @ModuleAction saveName: any;
  @ModuleAction resetState: any;

  @ModuleState item: User;
  @ModuleState error: RequestError;
  @ModuleState editForm: object;

  userId: number;
  form = new Form({
    name: '',
  });

  beforeRouteLeave (to: Route, from: Route, next: () => void) {
    this.resetState();
    next();
  }

  created() {
    console.log(this.form);
    this.userId = +this.$route.params.id;
    this.getItem(this.userId)
      .then(() => this.form.name = this.item.name);
  }

  edit() {
    this.form.errors.set(this.error.validationErrors);
    this.editName();
  }

  save() {
    this.saveName({ name: this.form.name, id: this.userId })
      .then(() => this.form.name = this.item.name, () => this.form.errors.set(this.error.validationErrors));
  }

  cancel() {
    this.cancelEdit();
    this.form.name = this.item.name;
  }
}
