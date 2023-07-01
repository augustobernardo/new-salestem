import { defineStore } from "pinia";
import { ref } from "vue";
import SaleModel from "../models/saleModel";
import SalesController from "../controllers/salesController";

interface Item {
    client: { name: string };
    product: { nameProd: string; amount: number };
    totalPrice: number;
    saleDate: string;
    editing: boolean;
}

const salesController = new SalesController();
const items = ref<Item[]>([]);
const showModal = ref(false);
const novoSale = ref<SaleModel>({
    codSale: 0,
    amount: 0,
    totalPrice: 0,
    saleDate: "",
});

export const useCard = defineStore("card", () => {
    interface CardData {
        totalPrice: string;
        label: string;
        class: string;
        percentage: string;
    }

    let sales: SaleModel[] = [];
    let totalPrice = 0;
    const limit = 10000;
    let percentage = 0;

    function getData() {
        salesController
            .getSales()
            .then((sales) => sales)
            .then((data) => {
                sales = data;
            })
            .catch((error) => {
                console.error("Erro ao obter os dados da API:", error);
            });

        sales.forEach((oSale, index) => {
            let [year, month, day] = oSale.saleDate.split("-");

            let date = new Date();
            let currentDay = date.getDay().toString();
            let currentMonth = date.getMonth().toString();
            let currentYear = date.getFullYear().toString();

            if (
                year == currentYear &&
                month == currentMonth &&
                day == currentDay
            ) {
                totalPrice += oSale.totalPrice;
            }
        });

        percentage = ((totalPrice / limit) * 100) / 1000;
    }

    debugger;
    getData();

    const cardData = ref<CardData[]>([
        {
            totalPrice: `${totalPrice}`,
            label: "Vendas de hoje",
            class: "chart3",
            percentage: `${percentage}`,
        },
        {
            totalPrice: `${totalPrice}`,
            label: "Vendas da última semana",
            class: "chart",
            percentage: "",
        },
        {
            totalPrice: `${totalPrice}`,
            label: "Vendas do último mês",
            class: "chart2",
            percentage: "",
        },
    ]);

    return {
        cardData,
        getData,
    };
});
