import apiService from '../services/apiService';
import ProductModel from '../models/productModel';
import { ToastifyClass } from "../utils/scripts/ToastifyClass";

const toastify = new ToastifyClass()

class ProductsController {
    async getProducts() {
        try {
            const response = await apiService.get<ProductModel[]>('products')
            return response as ProductModel[];
        } catch (error) {
            throw new Error('Erro ao buscar produtos');
        }
    }

    async postProducts(product: ProductModel) {
        try {
            await apiService.post<ProductModel>('products', product);
        } catch (error) {
            toastify.error('Erro ao adicionar produtos!')
            console.log(error);
        }
    }

    async updateProducts(product: ProductModel) {
        try {
            await apiService.update<ProductModel>('products', product.codProd, product);
        } catch (error) {
            toastify.error('Erro ao atualizar produto')
        }
    }
};


export default ProductsController;