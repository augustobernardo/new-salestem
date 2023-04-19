<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
import Login from "./views/LoginView.vue";
import { onMounted } from "vue";

const checkLogin = () => {
  localStorage.setItem('token', 'token');
  const token = localStorage.getItem('token');

  if (token) { // if token is null
    localStorage.setItem('token', 'token');
    return true;
  }
  return false;
}

const token = localStorage.getItem('token');

onMounted(() => {
  checkLogin();
})

</script>

<template>
  <!-- <div v-if="token !== 'token'">
    <Login />
  </div>


  <div v-else>
    <HomeView />
  </div> -->
  <RouterView />
</template>



