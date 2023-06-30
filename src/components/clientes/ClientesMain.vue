
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
                    <tr>
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
                            <button @click="editItem(item)">Editar</button>
                            <button @click="saveItem(item)" v-if="item.editing">Salvar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



        <div>
            <button @click="showModal = true">Registrar Novo Cliente</button>
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
                        <button type="submit">Registrar</button>
                    </form>
                    <button @click="fecharModal">Fechar</button>
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
            item.editing = true;
        }

        function saveItem(item: Item) {
            reloadTabela();
            item.editing = false;
            clientsController.updateUser(item);
            reloadTabela();
        }

        function registrarCliente() {
            reloadTabela();
            clientsController.postUser(novoCliente.value);
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
            novoCliente,
            registrarCliente,
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