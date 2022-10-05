import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SinglePost from "../components/layout/SinglePost.vue";
import BlogView from "../views/BlogView.vue";

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
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/post/:slug",
      name: "Blog-Single",
      component: SinglePost,
    },
    {
      path: "/blog/:metatype",
      name: "Blog-Archive",
      component: BlogView,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
