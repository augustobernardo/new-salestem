import apiService from '../services/apiService';
import SaleModel from '../models/saleModel'
import { ToastifyClass } from '../utils/scripts/ToastifyClass';

const toastify = new ToastifyClass();

class SalesController {
    async getSales() {
        try {
            const response = await apiService.get<SaleModel[]>('sales')
            return response as SaleModel[];
        } catch (error) {
            throw new Error('Erro ao buscar venda');
        }
    }

    async postSale(sale: SaleModel) {
        try {
            await apiService.post<SaleModel>('sales', sale);
        } catch (error) {
            toastify.error('Erro ao adicionar venda!')
            console.log(error);
        }
    }

    async updateSale(sale: SaleModel) {
        try {
            await apiService.update<SaleModel>('sales', sale.codSale, sale);
        } catch (error) {
            toastify.error('Erro ao atualizar venda')
        }
    }
};


export default SalesController;