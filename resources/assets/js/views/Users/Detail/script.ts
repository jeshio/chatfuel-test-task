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

@Component({
  // @ts-ignore
  head: { title: function() { return { inner: this.getTitle() } } },
})
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
  title = 'Информация о пользователе';

  getTitle() { return `${this.title} ${this.item ? this.item.name : ''}` };

  beforeRouteLeave (to: Route, from: Route, next: () => void) {
    this.resetState();
    next();
  }

  created() {
    this.$root.$emit('set-title', this.title);
    this.userId = +this.$route.params.id;
    this.getItem(this.userId)
      .then(() => {
        this.form.name = this.item.name;
        this.$emit('updateHead');
      });

  }

  edit() {
    this.form.errors.set(this.error.validationErrors);
    this.editName();
  }

  save() {
    this.saveName({ name: this.form.name, id: this.userId })
      .then(() => {
        this.form.name = this.item.name;
        this.$emit('updateHead');
      }, () => this.form.errors.set(this.error.validationErrors));
  }

  cancel() {
    this.cancelEdit();
    this.form.name = this.item.name;
  }
}
