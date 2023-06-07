import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "../views/DashboardHomeView.vue.vue"),
  },
  {
    path: "/vendas",
    name: "Venda",
    component: () => import(/* webpackChunkName: "vendas" */ "../views/VendasView.vue.vue"),
  },
  {
    path: "/produtos",
    name: "Produto",
    component: () => import(/* webpackChunkName: "produtos" */ "../views/VendasView.vue"),
  },
  {
    path: "/clientes",
    name: "Cliente",
    component: () => import(/* webpackChunkName: "clientes" */ "../views/ClientesView.vue.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;