import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
