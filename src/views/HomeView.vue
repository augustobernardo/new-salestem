<script setup lang="ts">
import HomeController from '../utils/scripts/HomeController'
import HeaderComponent from '../components/dashboard/HeaderComponent.vue';
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
        <HeaderComponent :section="true"/>
    </section>
    <section id="content">
        <HeaderComponent :section="false"/>
        <router-view />
    </section>
</template>

<style src="../style.css"/>
