import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
<<<<<<< HEAD
    // webpackChunkName: "home" will be loaded in a separate chunk
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
=======
    component: () => import("../views/HomeView.vue"),
    meta: {
      guest: true,
      requiresAuth: true,
    },
>>>>>>> 174885d6400a07c2bc553457045c3019d602dec0
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;