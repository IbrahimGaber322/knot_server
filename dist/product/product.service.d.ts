import { Product } from './schemas/product.schema';
import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private productModel;
    constructor(productModel: mongoose.Model<Product>);
    findAll(query: Query): Promise<Product[]>;
    create(product: CreateProductDto, user: User): Promise<Product>;
    findById(id: string): Promise<Product>;
    updateById(id: string, product: UpdateProductDto, user: User): Promise<Product>;
    deleteById(id: string, user: User): Promise<Product>;
    findProductsByUser(user: User): Promise<Product[]>;
}
