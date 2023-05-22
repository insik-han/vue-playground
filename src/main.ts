import { createApp } from "vue";

import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";

import App from "./App.vue";

const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);

router
  .isReady()
  .then(() => vue.mount("#app"))
  .catch((e) => console.error(e));
