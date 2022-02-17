import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import AboutMe from "../pages/AboutMe.vue";

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
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
