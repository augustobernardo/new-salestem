import apiService from '../services/apiService';
import ClientModel from '../models/clientModel';import { ToastifyClass } from "../utils/scripts/ToastifyClass";

const toastify = new ToastifyClass()

class ClientsController {
    async getClients() {
        try {
            const response = await apiService.get<ClientModel[]>('clients')
            return response as ClientModel[];
        } catch (error) {
            throw new Error('Erro ao buscar clientes');
        }
    }

    async postUser(client: ClientModel) {
        try {
            await apiService.post<ClientModel>('clients', client);
        } catch (error) {
            toastify.error('Erro ao adicionar cliente!')
            console.log(error);
        }
    }

    async updateUser(client: ClientModel) {
        try {
            await apiService.update<ClientModel>('clients', client.codClient, client);
        } catch (error) {
            toastify.error('Erro ao atualizar usuário')
        }
    }
};


export default ClientsController;