<script setup lang="ts">
import HomeView from "./views/DashboardHomeView.vue";
import Login from "./views/LoginView.vue";


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



