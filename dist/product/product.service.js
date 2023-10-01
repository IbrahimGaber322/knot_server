"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./schemas/product.schema");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll(query) {
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
    async create(product, user) {
        const isValidId = mongoose_2.default.isValidObjectId(user._id);
        if (!isValidId) {
            throw new common_1.BadRequestException('Please enter correct id.');
        }
        console.log(user._id);
        const data = Object.assign(product, { ownerId: user._id });
        console.log(data);
        const res = await this.productModel.create(data);
        return res;
    }
    async findById(id) {
        const isValidId = mongoose_2.default.isValidObjectId(id);
        if (!isValidId) {
            throw new common_1.BadRequestException('Please enter correct id.');
        }
        const product = await this.productModel.findById(id);
        if (!product) {
            throw new common_1.NotFoundException('Product not found.');
        }
        return product;
    }
    async updateById(id, product, user) {
        if (user._id !== id) {
            throw new common_1.UnauthorizedException("You can't edit this product");
        }
        return await this.productModel.findByIdAndUpdate(id, product, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id, user) {
        const product = await this.productModel.findById(id);
        if (user._id !== product.ownerId) {
            throw new common_1.UnauthorizedException("You can't edit this product");
        }
        return await this.productModel.findByIdAndDelete(id);
    }
    async findProductsByUser(user) {
        const products = await this.productModel.find({
            ownerId: user._id,
        });
        return products;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], ProductService);
//# sourceMappingURL=product.service.js.map