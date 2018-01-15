import Vue from "vue";

declare module "vue/types/vue" {
    interface Vue {
        $http: Axios.AxiosInstance;
        $axios: Axios.AxiosInstance;
    }
}