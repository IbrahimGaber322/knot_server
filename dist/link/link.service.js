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
exports.LinkService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const link_schema_1 = require("./schemas/link.schema");
let LinkService = class LinkService {
    constructor(linkModel) {
        this.linkModel = linkModel;
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
        const links = await this.linkModel
            .find({ ...keyword })
            .limit(resPerPage)
            .skip(skip);
        return links;
    }
    async findLinksBySection(id) {
        console.log(id);
        const isValidId = mongoose_2.default.isValidObjectId(id);
        if (!isValidId) {
            throw new common_1.BadRequestException('Please enter correct id.');
        }
        const links = await this.linkModel.find({
            sectionId: id,
        });
        return links;
    }
    async create(link, user) {
        console.log('create link');
        const data = Object.assign(link, { userId: user._id });
        const res = await this.linkModel.create(data);
        return res;
    }
    async findById(id) {
        const isValidId = mongoose_2.default.isValidObjectId(id);
        if (!isValidId) {
            throw new common_1.BadRequestException('Please enter correct id.');
        }
        const link = await this.linkModel.findById(id);
        if (!link) {
            throw new common_1.NotFoundException('link not found.');
        }
        return link;
    }
    async updateById(id, link, user) {
        if (user._id !== link.userId) {
            throw new common_1.UnauthorizedException("You can't edit this link.");
        }
        return await this.linkModel.findByIdAndUpdate(id, link, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id, user) {
        const link = await this.linkModel.findById(id);
        if (user._id !== link.userId) {
            throw new common_1.UnauthorizedException("You can't edit this link.");
        }
        return await this.linkModel.findByIdAndDelete(id);
    }
};
exports.LinkService = LinkService;
exports.LinkService = LinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(link_schema_1.Link.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], LinkService);
//# sourceMappingURL=link.service.js.map