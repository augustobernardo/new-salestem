import { defineStore } from 'pinia';
import { ref } from 'vue';
import SaleModel from "../models/saleModel";
import SalesController from "../controllers/salesController";
import ClientModel from "../models/clientModel";
import ProductModel from "../models/productModel";
import ProductsController from "../controllers/productController";
import ClientsController from "../controllers/clientsController";


export const useCard = defineStore('card', () => {
    interface Item {
      client: { name: string };
      product: { nameProd: string; amount: number };
      totalPrice: number;
      saleDate: string;
      editing: boolean;
    }
    
    const clientsController = new ClientsController();
    const productController = new ProductsController();
    const salesController = new SalesController();    
    const items = ref<Item[]>([]);
    const showModal = ref(false);
    const novoSale = ref<SaleModel>({
      codSale: 0,
      amount: 0,
      totalPrice: 0,
      saleDate: "",
      client: { codClient: 0, name: "", phone: "", email: "", cpf: "" },
      product: { codProd: 0, nameProd: "", price: 0, stock: 0, amount: 0 },
    });
    const clients = ref<ClientModel[]>([]);
    const products = ref<ProductModel[]>([]);

    interface CardData {
        value: string;
        label: string;
        class: string;
        percentage: string;
    }

    // const cardData = ref<CardData[]>([
    //     {
    //         value: "R$ 50.00",
    //         label: "Vendas de hoje",
    //         class: "chart3",
    //         percentage: "10",
    //     },
    //     {
    //         value: "R$ 1020.90",
    //         label: "Vendas da última semana",
    //         class: "chart",
    //         percentage: "80",
    //     },
    //     {
    //         value: "R$ 2834,00",
    //         label: "Vendas do último mês",
    //         class: "chart2",
    //         percentage: "60",
    //     },
    // ]);


    function getCardData() {
        salesController
          .getSales()
          .then((sales) => sales)
          .then((data) => {
            items.value = data;
          })
          .catch((error) => {
            console.error("Erro ao obter os dados da API:", error);
          });
  
        clientsController.getClients()
          .then((clients) => clients)
          .then((data) => {
            clients.value = data;
          })
          .catch((error) => {
            console.error("Erro ao obter os dados da API:", error);
          });
  
        productController.getProducts()
          .then((clients) => clients)
          .then((data) => {
            products.value = data;
          })
          .catch((error) => {
            console.error("Erro ao obter os dados da API:", error);
          });
      }

    // function setCardData(data: any) {
    //     cardData.value = data;
    // }

    return {
        // cardData,
        // setCardData
        getCardData,
    }
});