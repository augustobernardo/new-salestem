
<template>
    <main>
        <div class="head-title">
            <div class="left">
                <h1>Clientes</h1>
            </div>
        </div>

        <div>
            <table>
                <thead>
                    <tr class="tableTitle">
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Edição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                            <input v-model="item.name" :disabled="!item.editing" />
                        </td>
                        <td>
                            <input v-model="item.phone" :disabled="!item.editing" />
                        </td>
                        <td>
                            <input v-model="item.email" :disabled="!item.editing" />
                        </td>
                        <td>
                            <input v-model="item.cpf" :disabled="!item.editing" />
                        </td>
                        <td>
                            <button @click="editItem(item)" class="edit-button">Editar</button>
                            <button @click="saveItem(item)" v-if="item.editing" class="save-button">Salvar</button>
                            <button @click="cancelEdit(item)" v-if="item.editing" class="cancel-button">Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <button @click="showModal = true" class="add-button">Registrar Novo Cliente</button>
            <div v-if="showModal" class="modal">
                <div class="modal-content">
                    <h2>Registrar Novo Cliente</h2>
                    <form @submit.prevent="registrarCliente">
                        <label for="nome">Nome:</label>
                        <input id="nome" v-model="novoCliente.name" required />
                        <label for="telefone">Telefone:</label>
                        <input id="telefone" v-model="novoCliente.phone" required />
                        <label for="email">Email:</label>
                        <input id="email" v-model="novoCliente.email" required />
                        <label for="cpf">CPF:</label>
                        <input id="cpf" v-model="novoCliente.cpf" required />
                    </form>
                    <button type="submit" class="add-row-button">Registrar</button>
                    <button @click="fecharModal" class="cancel-button">Fechar</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ClientModel from '../../models/clientModel';
import ClientsController from '../../controllers/clientsController';

interface Item {
    codClient: number,
    name: string;
    phone: string,
    email: string; cpf: string;
    editing: boolean;
}

const clientsController = new ClientsController();

export default defineComponent({
    name: 'DataTable',
    setup() {
        const items = ref<Item[]>([]);

        const showModal = ref(false);
        const novoCliente = ref<ClientModel>({
            codClient: 0,
            name: '',
            phone: '',
            email: '',
            cpf: ''
        });

        onMounted(() => {
            reloadTabela();
        });

        function reloadTabela() {
            clientsController.getClients()
                .then((clients) => clients)
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
                item.editing = true
            }
        }

        function saveItem(item: Item) {
            reloadTabela();
            item.editing = false;
            clientsController.updateClient(item);
            reloadTabela();
        }

        function cancelEdit(item: Item) {
            item.editing = false;
            reloadTabela();
        }

        function registrarCliente() {
            clientsController.postClient(novoCliente.value);
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
            cancelEdit,
            showModal,
            novoCliente,
            registrarCliente,
            fecharModal
        };
    },
});
</script>

<style scoped src="../../styles/tables.css"/>