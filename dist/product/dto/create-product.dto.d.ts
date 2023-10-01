import { ProductType } from '../schemas/product.schema';
export declare class CreateProductDto {
    readonly active: boolean;
    readonly type: ProductType;
}
