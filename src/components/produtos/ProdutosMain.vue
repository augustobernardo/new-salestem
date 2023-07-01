<template>
    <main>
        <div class="head-title">
            <div class="left">
                <h1>Produtos</h1>
            </div>
            <table>
                <thead>
                    <tr class="tableTitle">
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
                            <button class="add-button" v-if="!item.editing" @click="editItem(item)">Editar</button>
                            <button class="save-button" @click="saveItem(item)" v-if="item.editing">Salvar</button>
                            <button @click="cancelEdit(item)" v-if="item.editing" class="cancel-button">Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <div>
                <button @click="showModal = true" class="add-button">Registrar Novo Produto</button>
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
                        </form>
                        <button @click="registrarProduto" type="submit" class="add-row-button">Registrar</button>
                        <button @click="fecharModal" class="cancel-button">Fechar</button>
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
            reloadTabela();
            showModal.value = false;
        }

        function fecharModal() {
            showModal.value = false;
            reloadTabela();
        }
        function cancelEdit(item: Item) {
            item.editing = false;
            reloadTabela();
        }

        return {
            items,
            editItem,
            saveItem,
            showModal,
            novoProduct,
            registrarProduto,
            fecharModal,
            cancelEdit
        };
    },
});
</script>

<style scoped src="../../styles/tables.css"/>