import Vue from "vue";
import App from "./App.vue";
import Routes from "./router";
//package that gives us access to directive: v-chat-scroll
import VueChatScroll from "vue-chat-scroll";

Vue.use(VueChatScroll);

Vue.config.productionTip = false;

new Vue({
  router: Routes, //for router we want to use router from above
  render: (h) => h(App),
}).$mount("#app");
