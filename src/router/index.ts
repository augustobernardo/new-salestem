import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      guest: true,
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;