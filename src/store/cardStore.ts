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
const limit = 10000;

interface CardData {
  totalPrice: string,
  label: string,
  class: string,
  percentage: string,
}

export const useCard = defineStore("card", () => {
  const cardData = ref<CardData[]>([
    {
      totalPrice: "0",
      label: "Vendas de hoje",
      class: "chart3",
      percentage: "0.00",
    },
    {
      totalPrice: "0",
      label: "Vendas da última semana",
      class: "chart",
      percentage: "0.00",
    },
    {
      totalPrice: "0",
      label: "Vendas do último mês",
      class: "chart2",
      percentage: "0.00",
    },
  ]);

  let totalPriceToday = 0;

  async function getData() {
    try {
      const sales = await salesController.getSales();
      let arr = sales

      arr.map((sale) => {
        const dateToday = new Date()
        let currentDay = dateToday.getDate().toString();
        let currentMonth = (dateToday.getMonth() + 1).toString();
        let currentYear = dateToday.getFullYear().toString();

        if (parseInt(currentDay) < 10) {
          currentDay = '0' + currentDay
        }

        if (parseInt(currentMonth) < 10) {
          currentMonth = '0' + currentMonth
        }
        let currentDate = `${currentDay}/${currentMonth}/${currentYear}`

        let [year, month, day] = sale.saleDate.split("-");
        let dateSale = `${day}/${month}/${year}`

        debugger
        if (dateSale === currentDate) {
          totalPriceToday += sale.totalPrice;
        }
      })

      const percentageToday = ((totalPriceToday / limit) * 100).toFixed(2);
      cardData.value[0].totalPrice = totalPriceToday.toFixed(2);
      cardData.value[0].percentage = percentageToday;

    } catch (error) {
      console.error("Erro ao obter os dados da API:", error);
    }
  }

  getData();

  return {
    cardData
  };
});