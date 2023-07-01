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
const limitDay = 1000;
const limitMonth = 7000;
const limitYear = 365000;


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
      percentage: "0",
    },
    {
      totalPrice: "0",
      label: "Vendas da última semana",
      class: "chart",
      percentage: "0",
    },
    {
      totalPrice: "0",
      label: "Vendas do último mês",
      class: "chart2",
      percentage: "0",
    },
  ]);

  let totalPriceToday = 0;
  let totalPriceMonth = 0;
  let totalPriceYear = 0;


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

        if (month === currentMonth) {
          totalPriceMonth += sale.totalPrice;
        }

        if (year === currentYear) {
          totalPriceYear += sale.totalPrice;
        }
      })

      const percentageToday = ((totalPriceToday / limitDay) * 100);
      const percentageMonth = ((totalPriceMonth / limitMonth) * 100);
      const percentageYear = ((totalPriceYear / limitYear) * 100);
      cardData.value[0].totalPrice = totalPriceToday.toString();
      cardData.value[0].percentage = percentageToday.toString();

      cardData.value[1].totalPrice = totalPriceMonth.toString();
      cardData.value[1].percentage = percentageMonth.toFixed(0).toString();

      cardData.value[2].totalPrice = totalPriceYear.toString();
      cardData.value[2].percentage = percentageYear.toFixed(0).toString();


    } catch (error) {
      console.error("Erro ao obter os dados da API:", error);
    }
  }

  getData();

  return {
    cardData
  };
});