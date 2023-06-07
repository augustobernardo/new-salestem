import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "../views/DashboardHomeView.vue"),
  },
  {
    path: "/vendas",
    name: "Venda",
    component: () => import(/* webpackChunkName: "vendas" */ "../views/VendasView.vue"),
  },
  {
    path: "/produtos",
    name: "Produto",
    component: () => import(/* webpackChunkName: "produtos" */ "../views/ProdutosView.vue"),
  },
  {
    path: "/clientes",
    name: "Cliente",
    component: () => import(/* webpackChunkName: "clientes" */ "../views/ClientesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;