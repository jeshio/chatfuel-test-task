import Vue from 'vue'
import Component from 'vue-class-component'
import {Route} from "vue-router";

@Component({
  // при переходах сбрасываем текущий title и ждём новый
  watch: {
    '$route' (to, from) {
      // @ts-ignore
      this.title = "";
    }
  }
})
export default class App extends Vue {
  title = "";

  created() {
    this.$root.$on('set-title', (title: string) => this.title = title);
  }
}
