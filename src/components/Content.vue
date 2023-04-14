<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Main from "./Main.vue";
</script>

<template>
    <section id="content">
        <Navbar />
        <Main />
    </section>
</template>

<style scoped>
/* #content {
	position: relative;
	width: calc(100% - 280px);
	left: 280px;
	transition: .3s ease;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px);
	left: 60px;
} */
</style>