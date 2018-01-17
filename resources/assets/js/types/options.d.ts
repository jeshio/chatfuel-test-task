import Vue from 'vue';
import VueRouter from "vue-router";

declare module 'vue/types/vue' {
  interface VueConstructor {
    router?: VueRouter;
    axios?: Axios;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: string;
  }
}