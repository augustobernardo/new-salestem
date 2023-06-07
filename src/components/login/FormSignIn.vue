<script setup lang="ts">
import IconComponent from "../IconComponent.vue";
import { ToastifyClass } from "../../utils/scripts/ToastifyClass";
import { useAuth } from "../../store/authStore";
import { useRouter } from "vue-router";

const toastify = new ToastifyClass();
const { login } = useAuth();

function checkForm() {
    const email = document.getElementById("email") as HTMLInputElement;
    const pass = document.getElementById("pass") as HTMLInputElement;

    if (email.value == "" || pass.value == "") {
        toastify.error("Preencha todos os campos");
    } else {
        toastify.success("Login realizado com sucesso");
        login(email.value, pass.value);
    }
}
</script>


<template>
    <form autocomplete="off" class="sign-in-form">

        <div class="logo">
            <IconComponent iconName="store" />
            <h3>Salestem</h3>
        </div>

        <div class="heading">
            <h2>Bem-vindo de volta!</h2>
            <h6>Ainda não tem uma conta?</h6>
            <a href="#" class="toggle"> Crie sua conta</a>
        </div>

        <div class="actual-form">
            <div class="input-wrap">
                <input type="text" minlength="4" required autocomplete="off" id="email" class="input-field">
                <label for="username" class="input-label">Email</label>
            </div>
            <div class="input-wrap">
                <input type="password" minlength="4" required autocomplete="off" id="pass" class="input-field">
                <label for="pass" class="input-label">Senha</label>
            </div>

            <input type="submit" v-on:click="checkForm()" value="Entrar" class="sign-btn">

            <p class="text">
                Já tem uma conta?
                <a href="#">Clique aqui</a>
            </p>
        </div>
    </form>
</template>
