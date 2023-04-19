import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuth = defineStore('auth', () => {

    const token = ref(localStorage.getItem('token') || '');

});
