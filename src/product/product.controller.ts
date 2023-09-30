import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllProducts(@Query() query: ExpressQuery): Promise<Product[]> {
    return this.productService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createProduct(
    @Body()
    product: CreateProductDto,
    @Req() req,
  ): Promise<Product> {
    return this.productService.create(product, req.user);
  }

  @Get('/product/:id')
  @UseGuards(AuthGuard())
  async getProduct(
    @Param('id')
    id: string,
  ): Promise<Product> {
    return this.productService.findById(id);
  }

  @Get('/user')
  @UseGuards(AuthGuard())
  async getProductsByUser(@Req() req): Promise<Product[]> {
    return this.productService.findProductsByUser(req.user);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
    @Req() req,
  ): Promise<Product> {
    return this.productService.updateById(id, product, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteProduct(
    @Param('id')
    id: string,
    @Req() req,
  ): Promise<Product> {
    return this.productService.deleteById(id, req.user);
  }
}
