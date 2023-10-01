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
exports.LinksectionController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const linksection_service_1 = require("./linksection.service");
const create_linksection_dto_1 = require("./dto/create-linksection.dto");
const update_linksection_dto_1 = require("./dto/update-linksection.dto");
let LinksectionController = class LinksectionController {
    constructor(linksectionService) {
        this.linksectionService = linksectionService;
    }
    async getAllLinksections(query) {
        return this.linksectionService.findAll(query);
    }
    async getLinksectionsByUser(req) {
        return this.linksectionService.findLinksectionsByUser(req.user);
    }
    async createLinksection(linksection, req) {
        return this.linksectionService.create(linksection, req.user);
    }
    async getLinksection(id) {
        return this.linksectionService.findById(id);
    }
    async updateLinksection(id, linksection, req) {
        return this.linksectionService.updateById(id, linksection, req.user);
    }
    async deleteLinksection(id, req) {
        return this.linksectionService.deleteById(id, req.user);
    }
};
exports.LinksectionController = LinksectionController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinksectionController.prototype, "getAllLinksections", null);
__decorate([
    (0, common_1.Get)('/user'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinksectionController.prototype, "getLinksectionsByUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_linksection_dto_1.CreateLinksectionDto, Object]),
    __metadata("design:returntype", Promise)
], LinksectionController.prototype, "createLinksection", null);
__decorate([
    (0, common_1.Get)('/linksection/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LinksectionController.prototype, "getLinksection", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_linksection_dto_1.UpdateLinksectionDto, Object]),
    __metadata("design:returntype", Promise)
], LinksectionController.prototype, "updateLinksection", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinksectionController.prototype, "deleteLinksection", null);
exports.LinksectionController = LinksectionController = __decorate([
    (0, common_1.Controller)('linksections'),
    __metadata("design:paramtypes", [linksection_service_1.LinksectionService])
], LinksectionController);
//# sourceMappingURL=linksection.controller.js.map