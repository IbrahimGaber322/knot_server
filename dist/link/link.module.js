"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModule = void 0;
const common_1 = require("@nestjs/common");
const link_controller_1 = require("./link.controller");
const link_service_1 = require("./link.service");
const auth_module_1 = require("../auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const link_schema_1 = require("./schemas/link.schema");
let LinkModule = class LinkModule {
};
exports.LinkModule = LinkModule;
exports.LinkModule = LinkModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Link', schema: link_schema_1.LinkSchema }]),
        ],
        controllers: [link_controller_1.LinkController],
        providers: [link_service_1.LinkService],
    })
], LinkModule);
//# sourceMappingURL=link.module.js.map