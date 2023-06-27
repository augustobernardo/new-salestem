<script setup lang="ts">
import { ref } from 'vue';
import PageNotFoundImg from '../assets/page_not_found.svg';

const pageNotFound = ref(PageNotFoundImg);
</script>


<template>
    <div class="page-not-found">
        <img :src="pageNotFound" alt="Página não Encontrada">
        <p class="error-message">Página não Encontrada</p>
        <router-link to="/" class="back_button">Voltar ao Login</router-link>
    </div>
</template>

<style scoped lang="css">
.page-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
}

.page-not-found img {
    width: 36%;
    height: auto;
}

.page-not-found p {
    margin-top: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
}

.page-not-found .back_button {
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border: 2px solid var(--primary-color);
    background-color: #3790e9;
    padding: 10px 20px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}

.page-not-found .back_button:hover {
    background-color: #166abd;
}

@media (max-width: 768px) {
    .page-not-found img {
        width: 80%;
    }
}

@media (max-width: 425px) {
    .page-not-found h1 {
        font-size: 1.2rem;
    }
}

@media (max-width: 375px) {
    .page-not-found h1 {
        font-size: 1.2rem;
    }
}

@media (max-width: 320px) {
    .page-not-found h1 {
        font-size: 1rem;
    }
}

</style>
