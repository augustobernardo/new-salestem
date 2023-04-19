<script setup lang="ts">
import { onMounted, ref } from "vue";
import FormSignIn from '../components/login/FormSignIn.vue';
import FormSignUp from '../components/login/FormSignUp.vue';
import LoginImage from '../assets/login.svg';
import RegisterImage from '../assets/register.svg';

const image = ref(LoginImage);
const altImage = ref('Login');
const idImage = ref('loginImage');

const inputsDetails = () => {
    const inputs = document.querySelectorAll('.input-field');

    inputs.forEach((inp, index) => {
        inp.addEventListener("focus", () => {
            inp.classList.add("active");
        });
        inp.addEventListener("blur", () => {
            // @ts-ignore -> ignorar o erro de tipagem (código funcional)
            if (inputs[index].value != '') return;
            inp.classList.remove("active");
        });
    })
}

const toggleFormsAnimation = () => {
    const toggleBtn = document.querySelectorAll('.toggle') as NodeListOf<HTMLElement>;
    const main = document.querySelector('main') as HTMLElement;

    toggleBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            main.classList.toggle('sign-up-mode');
            changeImages();
        })
    })
}

const changeImages = () => {
    const main = document.querySelector('main') as HTMLElement;

    if (main.classList.contains('sign-up-mode')) {
        image.value = RegisterImage;
        altImage.value = 'Register';
        idImage.value = 'registerImage';
        return;
    }
    image.value = LoginImage;
    altImage.value = 'Login';
    idImage.value = 'loginImage';
    return;
}

onMounted(() => {
    inputsDetails();
    toggleFormsAnimation();
    changeImages();
})

</script>

<template>
    <main>
        <div class="box">
            <div class="inner-box">
                <div class="forms-wrap">
                    <FormSignIn />
                    <FormSignUp />
                </div>
                <div class="carousel">
                    <div class="images-wrapper">
                        <img :src="image" :alt="altImage" :id="idImage" class="image"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style src="../styles/login.css"/>