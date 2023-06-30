import saleModel from '../models/saleModel'

class SalesController {
    async getClients() {
        try {
            const response = await apiService.get<SaleModel[]>('clients')
            return response as SaleModel[];
        } catch (error) {
            throw new Error('Erro ao buscar clientes');
        }
    }

    async postUser(sale: SaleModel) {
        try {
            await apiService.post<SaleModel>('clients', sale);
        } catch (error) {
            toastify.error('Erro ao adicionar cliente!')
            console.log(error);
        }
    }

    async updateUser(sale: SaleModel) {
        try {
            await apiService.update<SaleModel>('sales', sale.codClient, sale);
        } catch (error) {
            toastify.error('Erro ao atualizar usuário')
        }
    }
};


export default SalesController;