import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
  ) {}

  async findAll(query: Query): Promise<Product[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const products = await this.productModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async create(product: Product, user: User): Promise<Product> {
    const data = Object.assign(product, { ownerId: user._id });
    const res = await this.productModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return product;
  }

  async updateById(id: string, product: Product, user: User): Promise<Product> {
    if (user._id !== product.ownerId) {
      throw new UnauthorizedException("You can't edit this product");
    }
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, user: User): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (user._id !== product.ownerId) {
      throw new UnauthorizedException("You can't edit this product");
    }
    return await this.productModel.findByIdAndDelete(id);
  }
}
