import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCard = defineStore('card', () => {

    interface CardData {
        value: string;
        label: string;
        class: string;
        percentage: string;
    }

    const cardData = ref<CardData[]>([
        {
            value: "R$ 50.00",
            label: "Vendas de hoje",
            class: "chart3",
            percentage: "10",
        },
        {
            value: "R$ 1020.90",
            label: "Vendas da última semana",
            class: "chart",
            percentage: "80",
        },
        {
            value: "R$ 2834,00",
            label: "Vendas do último mês",
            class: "chart2",
            percentage: "60",
        },
    ]);

    // function getCardData() {
    //     return cardData.value;
    // }

    function setCardData(data: any) {
        cardData.value = data;
    }

    return {
        cardData,
        setCardData
    }
});