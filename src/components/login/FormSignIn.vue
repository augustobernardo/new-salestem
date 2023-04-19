<script setup lang="ts">
import IconComponent from "../IconComponent.vue";
</script>


<template>
    <form action="./Login.vue" autocomplete="off" class="sign-in-form">

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

            <input type="submit" value="Entrar" class="sign-btn">

            <p class="text">
                Esqueceu sua senha?
                <a href="#">Clique aqui</a>
            </p>
        </div>
    </form>
</template>
