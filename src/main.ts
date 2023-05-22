import { createApp } from "vue";

import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";

import App from "./App.vue";

const vue = createApp(App).use(router).use(store).use(vuetify);

router
  .isReady()
  .then(() => vue.mount("#app"))
  .catch(console.error);
