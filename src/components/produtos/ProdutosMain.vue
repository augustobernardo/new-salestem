<template>
    <main>
        <div class="head-title">
            <div class="left">
                <h1>Produtos</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Edição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                            <input v-model="item.nameProd" :disabled="!item.editing" />
                        </td>
                        <td>
                            <input v-model="item.price" :disabled="!item.editing" />
                        </td>
                        <td>
                            <input v-model="item.stock" :disabled="!item.editing" />
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



            <div>
                <button @click="showModal = true">Registrar Novo Produto</button>
                <div v-if="showModal" class="modal">
                    <div class="modal-content">
                        <h2>Registrar Novo Produto</h2>
                        <form @submit.prevent="registrarProduto">
                            <label for="nome">Nome do Produto:</label>
                            <input id="nome" v-model="novoProduct.nameProd" required />
                            <label for="price">Preço:</label>
                            <input id="price" v-model="novoProduct.price" required />
                            <label for="stock">Estoque:</label>
                            <input id="stock" v-model="novoProduct.stock" required />
                            <button type="submit">Registrar</button>
                        </form>
                        <button @click="fecharModal">Fechar</button>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ProductModel from '../../models/productModel';
import ProductsController from '../../controllers/productController'

interface Item {
    codPr: number,
    nameProd: string;
    price: string,
    stock: string; cpf: string;
    editing: boolean;
}

const productController = new ProductsController();

export default defineComponent({
    name: 'DataTable',
    setup() {
        const items = ref<Item[]>([]);

        const showModal = ref(false);
        const novoProduct = ref<ProductModel>({
            codProd: 0,
            nameProd: '',
            price: 0,
            stock: 0
        });

        onMounted(() => {
            reloadTabela();
        });

        function reloadTabela() {
            productController.getProducts()
                .then((products) => products)
                .then((data) => {
                    items.value = data;
                })
                .catch((error) => {
                    console.error('Erro ao obter os dados da API:', error);
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
            reloadTabela();
            item.editing = false;
            productController.updateProducts(item);
            reloadTabela();
        }

        function registrarProduto() {
            productController.postProducts(novoProduct.value);
            showModal.value = false;
            reloadTabela();
        }

        function fecharModal() {
            showModal.value = false;
            reloadTabela();
        }

        return {
            items,
            editItem,
            saveItem,
            showModal,
            novoProduct,
            registrarProduto,
            fecharModal
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

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    border: 1px solid #ccc;
}

@media (max-width: 768px) {
    table {
        font-size: 14px;
    }

    th,
    td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

button {
    padding: 4px 8px;
    margin: 4px;
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

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
}

.button-group {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

button {
    margin-left: 10px;
    padding: 8px 16px;
    font-size: 14px;
}

button:first-child {
    margin-left: 0;
}
</style>