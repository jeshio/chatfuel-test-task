import Vue from 'vue'
import Component from 'vue-class-component'
import {
  Action,
  State,
  namespace,
} from 'vuex-class'
import {User} from "../../../store/modules/users/state";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import 'vue-awesome/icons/arrow-left';
import 'vue-awesome/icons/arrow-right';
import Icon from "vue-awesome";

const ModuleAction = namespace('users', Action);
const ModuleState = namespace('users', State);

@Component({
  // @ts-ignore
  head: { title: function () { return { inner: this.title } } },
  components: {
    PulseLoader,
    Icon
  }
})
export default class UsersList extends Vue {
  @ModuleAction getItems: any;
  @ModuleAction prevPage: any;
  @ModuleAction nextPage: any;
  @ModuleState items: Array<User>;
  @ModuleState previousPageUrl: string;
  @ModuleState nextPageUrl: string;
  @ModuleState loading: boolean;

  title = Vue.i18n.translate('titles.user_list');

  created() {
    this.$root.$emit('set-title', this.title);
    if (this.items.length === 0) {
      this.getItems();
    }
  }
}
