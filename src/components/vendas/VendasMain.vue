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
            <th>Total Price</th>
            <th>Data da Venda</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>
              <input v-model="item.client.name" :disabled="!item.editing" />
            </td>
            <td>
              <input v-model="item.products[0].nameProd" :disabled="!item.editing" />
            </td>
            <td>
              <input v-model="item.products[0].amount" :disabled="!item.editing" />
            </td>
            <td>
              <input v-model="item.totalPrice" :disabled="!item.editing" />
            </td>
            <td>
              <input v-model="item.saleDate" :disabled="!item.editing" />
            </td>
            <td>
              <button @click="editItem(item)">Editar</button>
              <button @click="saveItem(item)" v-if="item.editing">Salvar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <button @click="showModal = true">Registrar Nova Venda</button>
      <div v-if="showModal" class="modal">
        <!-- Modal content for registering new sale -->
      </div>
    </div>
  </main>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import SaleModel from "../../models/saleModel";
import SalesController from "../../controllers/salesController";

interface Item {
  client: { name: string };
  products: { nameProd: string; amount: number }[];
  totalPrice: number;
  saleDate: string;
  editing: boolean;
}

const salesController = new SalesController();

export default defineComponent({
  name: "DataTable",
  setup() {
    const items = ref<Item[]>([]);
    const showModal = ref(false);
    const novoSale = ref<SaleModel>({
      codSale: 0,
      totalPrice: 0,
      saleDate: "",
      client: { codClient: 0, name: "", phone: "", email: "", cpf: "" },
      products: [{ codProd: 0, nameProd: "", price: 0, stock: 0, amount: 0 }],
    });

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
    }

    function editItem(item: Item) {
      if (item.editing) {
        item.editing = false;
      } else {
        item.editing = true;
      }
    }

    function saveItem(item: Item) {
      item.editing = false;
      salesController.updateSale(item);
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
      registrarVenda,
      fecharModal,
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
</style>
  