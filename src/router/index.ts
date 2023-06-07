import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/:id",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "../components/dashboard/DashboardComponent.vue"),
      },
      {
        path: "vendas",
        name: "Vendas",
        component: () => import(/* webpackChunkName: "vendas" */ "../components/VendasComponent.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;