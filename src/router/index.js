import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";

const routes = [
  {
    path: "/",
    redirect: "/main-page",
  },
  {
    path: "/main-page",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
