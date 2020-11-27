import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-cf7c0/databases/(default)/documents";
// axios.defaults.headers.common["Authorization"] = "jiji";
// axios.defaults.headers.get["Accept"] = "application/json";

const int = axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (responce) => {
    console.log(responce);
    return responce;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// console.log(int);
axios.interceptors.request.eject(int);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
