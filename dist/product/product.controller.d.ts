import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProducts(query: ExpressQuery): Promise<Product[]>;
    createProduct(product: CreateProductDto, req: any): Promise<Product>;
    getProduct(id: string): Promise<Product>;
    getProductsByUser(req: any): Promise<Product[]>;
    updateProduct(id: string, product: UpdateProductDto, req: any): Promise<Product>;
    deleteProduct(id: string, req: any): Promise<Product>;
}
