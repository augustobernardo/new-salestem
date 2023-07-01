import ClientModel from "./clientModel";
import ProductModel from "./productModel";

interface SaleModel {
    codSale: number,
    totalPrice: number,
    saleDate: string,
    client: ClientModel,
    products: ProductModel[]
}

export default SaleModel;