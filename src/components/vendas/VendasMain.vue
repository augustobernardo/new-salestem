<template>
  <main>
    <div class="head-title">
      <div class="left">
        <h1>Vendas</h1>
      </div>
    </div>

    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Nome do Cliente</th>
            <th>Nome do Produto</th>
            <th>Quantidade</th>
            <th>Total</th>
            <th>Data da Venda</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" :class="{ 'row-editing': item.editing }">
            <td>
              <input v-model="item.client.name" :disabled="!item.editing" class="input-field" />
            </td>
            <td>
              <input v-model="item.product.nameProd" :disabled="!item.editing" class="input-field" />
            </td>
            <td>
              <input v-model="item.amount" :disabled="!item.editing" class="input-field" />
            </td>
            <td>
              <input v-model="item.totalPrice" :disabled="!item.editing" class="input-field" />
            </td>
            <td>
              <input v-model="item.saleDate" :disabled="!item.editing" class="input-field" />
            </td>
            <td>
              <button @click="editItem(item)" v-if="!item.editing" class="edit-button">Editar</button>
              <button @click="saveItem(item)" v-if="item.editing" class="save-button">Salvar</button>
              <button @click="cancelEdit(item)" v-if="item.editing" class="cancel-button">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
  <button @click="showModal = true" class="add-button">Registrar Nova Venda</button>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>Registrar Nova Venda</h2>
      <form @submit.prevent="registrarVenda">
        <div class="form-group">
          <label for="cliente">Cliente:</label>
          <select id="cliente" v-model="novoSale.client" required class="input-field">
            <option v-for="client in clients" :key="client.codClient" :value="client">{{ client.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="produto">Produto:</label>
          <select id="produto" v-model="novoSale.product" required class="input-field">
            <option v-for="product in products" :key="product.codProd" :value="product">{{ product.nameProd }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="saleDate">Quantidade:</label>
          <input id="saleDate" v-model="novoSale.amount" type="number" required class="input-field" />
        </div>
        <br>
        <div class="button-group">
          <button type="submit" class="add-row-button">Registrar</button>
          <button @click="fecharModal" class="cancel-button">Fechar</button>
        </div>
      </form>
    </div>
  </div>
</div>


  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import SaleModel from "../../models/saleModel";
import SalesController from "../../controllers/salesController";
import ClientModel from "../../models/clientModel";
import ProductModel from "../../models/productModel";
import ProductsController from "../../controllers/productController";
import ClientsController from "../../controllers/clientsController";

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

export default defineComponent({
  name: "DataTable",
  setup() {
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

    onMounted(() => {
      reloadTabela();
    });

    function reloadTabela() {
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

    function editItem(item: Item) {
      item.editing = true;
    }

    function saveItem(item: Item) {
      item.editing = false;
      salesController.updateSale(item);
      reloadTabela();
    }

    function cancelEdit(item: Item) {
      item.editing = false;
      reloadTabela();
    }

    function registrarVenda() {
      salesController.postSale(novoSale.value);
      showModal.value = false;
      reloadTabela();
    }

    function fecharModal() {
      showModal.value = false;
      reloadTabela();
    }

    return {
      items,
      showModal,
      novoSale,
      editItem,
      saveItem,
      cancelEdit,
      registrarVenda,
      fecharModal,
      clients,
      products
    };
  },
});
</script>


<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.row-editing {
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.edit-button,
.save-button,
.cancel-button,
.add-button,
.remove-button,
.add-row-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.remove-button,
.edit-button {
  margin-left: 3px;
  background-color: #007bff;
}

.save-button {
  background-color: #28a745;
}

.cancel-button {
  background-color: #dc3545;
}

.add-button,
.add-row-button {
  background-color: #007bff;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.pagination button {
  margin: 0 4px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.add-row {
  display: flex;
  justify-content: flex-end;
  margin: 16px;
}

.left {
  margin: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
}

h2 {
  margin-bottom: 20px;
}
</style>
  