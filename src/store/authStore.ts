import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuth = defineStore('auth', () => {

    const token = ref<string | null>(localStorage.getItem('token'));
    const userParams = {
        email: ref<string | null>(null),
        password: ref<string | null>(null)
    };

    function generateToken() {
        token.value = Math.random().toString(36).substr(2);

        localStorage.setItem('token', token.value.toString());
    }

    function login(emailParam: string, passParam: string) {
        userParams.email.value = emailParam;
        userParams.password.value = passParam;

        localStorage.setItem('email', userParams.email.value);
        localStorage.setItem('password', userParams.password.value);

        generateToken();
    }
        
    function logout() {
        userParams.email.value = null;
        userParams.password.value = null;
        // token.value = null;

        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('token');
    }

    return {
        // token,
        login,
        logout
    }
});
