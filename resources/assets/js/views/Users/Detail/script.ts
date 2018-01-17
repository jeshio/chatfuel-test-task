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

import 'vue-awesome/icons/arrow-left';
import 'vue-awesome/icons/pencil';
import Icon from 'vue-awesome';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const ModuleAction = namespace('users', Action);
const ModuleState = namespace('users', State);

@Component({
  // @ts-ignore
  head: { title: function() { return { inner: this.getTitle() } } },
  components: {
    Icon,
    PulseLoader
  }
})
export default class UsersDetail extends Vue {
  @ModuleAction getItem: any;
  @ModuleAction editName: any;
  @ModuleAction cancelEdit: any;
  @ModuleAction saveName: any;
  @ModuleAction resetDetailState: any;

  @ModuleState item: User;
  @ModuleState error: RequestError;
  @ModuleState editForm: object;
  @ModuleState loading: boolean;

  userId: number;
  form = new Form({
    name: '',
  });
  title = Vue.i18n.translate('titles.user_detail');

  getTitle() { return `${this.title} ${this.item ? this.item.name : ''}` };

  beforeRouteLeave (to: Route, from: Route, next: () => void) {
    this.resetDetailState();
    next();
  }

  created() {
    this.$root.$emit('set-title', this.title);
    this.userId = +this.$route.params.id;
    this.getItem(this.userId)
      .then(() => {
        this.form.name = this.item.name;
        this.$emit('updateHead');
      }, () => {
        if (this.error.code === 404) {
          this.$router.push('/error404');
        }
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
