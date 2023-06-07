<script setup lang="ts">
import HomeController from '../utils/scripts/HomeController';
import Sidebar from "../components/dashboard/Sidebar.vue";
import Navbar from "../components/dashboard/Navbar.vue";
import Main from "../components/dashboard/Main.vue";
import { onMounted } from "vue";

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
        <Sidebar />
    </section>
    <section id="content">
        <Navbar />
        <Main />
    </section>
</template>

<style src="../style.css"/>
