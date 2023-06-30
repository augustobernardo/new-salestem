import { defineStore } from "pinia";
import { ref } from "vue";
import { ToastifyClass } from "../utils/scripts/ToastifyClass";
import UserController from "../controllers/userController";
import UserModel from '../model/userModel'


export const useAuth = defineStore("auth", () => {
    const token = ref<string | null>(localStorage.getItem("token"));

    const userParams = {
        email: ref<string | null>(null),
        password: ref<string | null>(null),
        setUsername: ref<string | null>(null),
    };

    function getToken() {
        return token.value;
    }

    function getEmail() {
        return userParams.email.value;
    }

    function getPassword() {
        return userParams.password.value;
    }

    function getUsername() {
        return userParams.setUsername.value;
    }

    function setToken(tokenParam: string) {
        token.value = tokenParam;
    }

    function setEmail(emailParam: string) {
        userParams.email.value = emailParam;
    }

    function setPassword(passParam: string) {
        userParams.password.value = passParam;
    }

    function setUsername(username: string) {
        userParams.setUsername.value = username;
    }

    function generateToken() {
        setToken(Math.random().toString(36).substr(2));
    }

    function register(username: string, emailParam: string, passParam: string) {
        const user: UserModel = {
            id: 0,
            username: username,
            email: emailParam,
            password: passParam
        }

        UserController.postUser(user)


        // if (emailParam && passParam && username) {
        //     setEmail(emailParam);
        //     setPassword(passParam);
        //     setUsername(username);
        //     generateToken();
        // }
    }

    function login(emailParam: string, passParam: string) {
        const toastify = new ToastifyClass();

        UserController.validateUser(emailParam, passParam)

        // Se não validar:
        toastify.error('Erro ao tentar encontrar usuário')
    }

    function logout() {
        setEmail("");
        setPassword("");
        setUsername("");
        setToken("");
    }

    function clearUserData() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("token");
    }

    return {
        getToken,
        login,
        register,
        logout,
        clearUserData,
        generateToken,
        getEmail,
        getPassword,
        setToken,
        setEmail,
        setPassword,
    };
});
