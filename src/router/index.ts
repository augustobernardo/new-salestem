import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "Home",
    // webpackChunkName: "home" will be loaded in a separate chunk
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;