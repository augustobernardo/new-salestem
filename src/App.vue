<script setup lang="ts">
import Sidebar from "./components/dashboard/Sidebar.vue";
import Navbar from "./components/dashboard/Navbar.vue";
import Main from "./components/dashboard/Main.vue";
import Login from "./views/Login.vue";
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
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  })
}

const verifyMode = () => {
  const switchMode = document.getElementById('switch-mode') as HTMLInputElement;
  const getTheme = localStorage.getItem('theme');

  if (getTheme && getTheme === 'dark') {
    document.body.classList.add('dark');
    switchMode.checked = true;
  } else {
    document.body.classList.remove('dark');
    switchMode.checked = false;
  }
}

const checkLogin = () => {
  const token = localStorage.getItem('token');

  if (!token) { // if token is null
    // window.location.href = '/';
    localStorage.removeItem('token');
    return false;
  }

  // window.location.href = '/dashboard';
  localStorage.setItem('token', 'token');
  return true;
}

const token = localStorage.getItem('token');

onMounted(() => {

  // Se estiver logado
  if (checkLogin()) {
    verifyMode();
    allSideMenu();
    menuBar();
    switchMode();
  }
})

</script>

<template>
  <div v-if="token !== 'token'">
    <Login />
  </div>

  <div v-else>
    <section id="sidebar">
      <Sidebar />
    </section>
    <section id="content">
      <Navbar />
      <Main />
    </section>
  </div>
</template>

<style src="./style.css" />
