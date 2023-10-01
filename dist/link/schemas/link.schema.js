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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkSchema = exports.Link = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../auth/schemas/user.schema");
const linksection_schema_1 = require("../../linksection/schemas/linksection.schema");
let Link = class Link {
};
exports.Link = Link;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", user_schema_1.User)
], Link.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Linksection',
        required: true,
    }),
    __metadata("design:type", linksection_schema_1.Linksection)
], Link.prototype, "sectionId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Link.prototype, "label", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Link.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Link.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: true }),
    __metadata("design:type", Boolean)
], Link.prototype, "active", void 0);
exports.Link = Link = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Link);
exports.LinkSchema = mongoose_1.SchemaFactory.createForClass(Link);
//# sourceMappingURL=link.schema.js.map