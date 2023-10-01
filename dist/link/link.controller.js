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
exports.LinkController = void 0;
const common_1 = require("@nestjs/common");
const link_service_1 = require("./link.service");
const passport_1 = require("@nestjs/passport");
const create_link_dto_1 = require("./dto/create-link.dto");
const update_link_dto_1 = require("./dto/update-link.dto");
let LinkController = class LinkController {
    constructor(linkService) {
        this.linkService = linkService;
    }
    async getAllLinks(query) {
        return this.linkService.findAll(query);
    }
    async getLinks(id) {
        return this.linkService.findLinksBySection(id);
    }
    async createLink(link, req) {
        return this.linkService.create(link, req.user);
    }
    async getLink(id) {
        return this.linkService.findById(id);
    }
    async updateLink(id, link, req) {
        return this.linkService.updateById(id, link, req.user);
    }
    async deleteLink(id, req) {
        return this.linkService.deleteById(id, req.user);
    }
};
exports.LinkController = LinkController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getAllLinks", null);
__decorate([
    (0, common_1.Get)('/section/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLinks", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_link_dto_1.CreateLinkDto, Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "createLink", null);
__decorate([
    (0, common_1.Get)('/link/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLink", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_link_dto_1.UpdateLinkDto, Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "updateLink", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "deleteLink", null);
exports.LinkController = LinkController = __decorate([
    (0, common_1.Controller)('links'),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], LinkController);
//# sourceMappingURL=link.controller.js.map