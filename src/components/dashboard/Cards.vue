<script setup lang="ts">
import { useCard } from "../../store/cardStore";
import ChartComponent from "./ChartComponent.vue"
import { onMounted } from "vue";
import { gsap } from "gsap";

const cardStore = useCard();
const cardData = cardStore.cardData;

onMounted(() => {
    gsap.from(".box-info li", {
        duration: 0.8,
        y: 25,
        opacity: 0,
        stagger: 0.2,
        ease: "ease-in-out",
    });
});

</script>

<template>
    <ul class="box-info">
        <li v-for="(card, index) in cardData" :key="index">
            <ChartComponent :classChart="card.class" :percentage="card.percentage" />
            <span class="text">
                <h3>{{ card.value }}</h3>
                <p>{{ card.label }}</p>
            </span>
        </li>
    </ul>
</template>