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
exports.LinksectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const linksection_schema_1 = require("./schemas/linksection.schema");
let LinksectionService = class LinksectionService {
    constructor(linksectionModel) {
        this.linksectionModel = linksectionModel;
    }
    async findAll(query) {
        const resPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        const keyword = query.keyword
            ? {
                label: {
                    $regex: query.keyword,
                    $options: 'i',
                },
            }
            : {};
        const linksections = await this.linksectionModel
            .find({ ...keyword })
            .limit(resPerPage)
            .skip(skip);
        return linksections;
    }
    async findLinksectionsByUser(user) {
        const linksections = await this.linksectionModel.find({
            userId: user._id,
        });
        return linksections;
    }
    async create(linksection, user) {
        const data = Object.assign(linksection, { userId: user._id });
        const res = await this.linksectionModel.create(data);
        return res;
    }
    async findById(id) {
        const isValidId = mongoose_2.default.isValidObjectId(id);
        if (!isValidId) {
            throw new common_1.BadRequestException('Please enter correct id.');
        }
        const linksection = await this.linksectionModel.findById(id);
        if (!linksection) {
            throw new common_1.NotFoundException('Linksection not found.');
        }
        return linksection;
    }
    async updateById(id, linksection, user) {
        const foundLinkSection = await this.linksectionModel.findById(id);
        if (user._id !== foundLinkSection.userId) {
            throw new common_1.UnauthorizedException("You can't edit this linksection.");
        }
        return await this.linksectionModel.findByIdAndUpdate(id, linksection, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id, user) {
        const linksection = await this.linksectionModel.findById(id);
        if (user._id !== linksection.userId) {
            throw new common_1.UnauthorizedException("You can't edit this linksection.");
        }
        return await this.linksectionModel.findByIdAndDelete(id);
    }
};
exports.LinksectionService = LinksectionService;
exports.LinksectionService = LinksectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(linksection_schema_1.Linksection.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], LinksectionService);
//# sourceMappingURL=linksection.service.js.map