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
        component: () => import("../views/DashboardHomeView.vue"),
    },
    {
        path: "/vendas",
        name: "Venda",
        component: () => import("../views/VendasView.vue"),
    },
    {
        path: "/produtos",
        name: "Produto",
        component: () => import("../views/ProdutosView.vue"),
    },
    {
        path: "/clientes",
        name: "Cliente",
        component: () => import("../views/ClientesView.vue"),
    },
    {
        path: "/forgotPass",
        name: "ForgotPass",
        component: () => import("../views/ForgotPassView.vue"),
    },
    {
        path: "/:pathMatch(.*)",
        name: "404",
        component: () => import("../views/PageNotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
