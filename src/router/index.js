import Vue from "vue"; //for Vue.use();
import Router from "vue-router";
import Welcome from "../components/Welcome";
import Chat from "../components/Chat";

Vue.use(Router);
//new router instance
export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true, //can pass props to other component
      //route guard
      //before the component is loaded
      /* eslint-disable no-unused-vars */
      beforeEnter: (to, from, next) => {
        // console.log("to.params.name: ", to.params.name);
        if (to.params.name) {
          next();
        } else {
          //if name is not entered, redirect to Home
          next({ name: "Welcome" });
        }
      } /* eslint-enable no-unused-vars */,
    },
  ],
  mode: "history",
});
