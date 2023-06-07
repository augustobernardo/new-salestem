<script setup lang="ts">
import HomeController from '../utils/scripts/HomeController';
import Sidebar from "../components/menu/Sidebar.vue";
import Navbar from "../components/menu/Navbar.vue";
import Main from "../components/dashboard/DashboardMain.vue";
import { onMounted } from "vue";
import DashboardMain from '../components/dashboard/DashboardMain.vue';

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
        <Sidebar :activeMenu="1" />
    </section>
    <section id="content">
        <Navbar />
        <DashboardMain />
    </section>
</template>

<style src="../style.css"/>
