<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import { onMounted } from "vue";

const allSideMenu = () => {
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

  allSideMenu.forEach(item => {
    const li = item.parentElement as HTMLElement;

    item.addEventListener('click', function () {
      allSideMenu.forEach(i => {
        const liParent = i.parentElement as HTMLElement;
        liParent.classList.remove('active');
      })
      li.classList.add('active');
    })
  });
}

const menuBar = () => {
  const menuBar = document.querySelector('#content nav .bx.bx-menu') as HTMLElement;
  const sidebar = document.getElementById('sidebar') as HTMLElement;

  menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
  })
}

const switchMode = () => {
  const switchMode = document.getElementById('switch-mode') as HTMLInputElement;

  switchMode.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  })
}

const verifyMode = () => {
  const switchMode = document.getElementById('switch-mode') as HTMLInputElement;
  const getMode = localStorage.getItem('mode');

  if (getMode && getMode === 'dark') {
    document.body.classList.add('dark');
    switchMode.checked = true;
  } else {
    document.body.classList.remove('dark');
    switchMode.checked = false;
  }
}

onMounted(() => {
  verifyMode();

  allSideMenu();

  menuBar();

  switchMode();
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

<style src="./style.css" />
