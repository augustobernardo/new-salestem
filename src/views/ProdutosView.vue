<script setup lang="ts">
import HomeController from '../utils/scripts/HomeController';
import Sidebar from "../components/menu/Sidebar.vue";
import Navbar from "../components/menu/Navbar.vue";
import { onMounted } from "vue";
import ProdutosMain from '../components/produtos/ProdutosMain.vue';

const homeController = new HomeController();

onMounted(() => {
    homeController.verifyMode();
    homeController.allSideMenu();
    homeController.menuBar();
    homeController.switchMode();
})
</script>


<template>
    <section id="sidebar">
        <Sidebar :activeMenu="3" />
    </section>
    <section id="content">
        <Navbar />

        <ProdutosMain />

    </section>
</template>

<style src="../style.css"/>
