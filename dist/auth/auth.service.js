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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signUp(signUpDto) {
        const { password } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({
            ...signUpDto,
            password: hashedPassword,
        });
        const token = this.jwtService.sign({ id: user._id });
        return { token };
    }
    async login(loginDto) {
        const { primaryEmail, password } = loginDto;
        const user = await this.userModel.findOne({ primaryEmail });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const token = this.jwtService.sign({ id: user._id });
        return { token };
    }
    async getUser(user) {
        const foundUser = await this.userModel
            .findById(user._id)
            .select('-password');
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        return { user: foundUser };
    }
    async updateUser(user, updateDto) {
        const updatedUser = await this.userModel.findByIdAndUpdate(user._id, updateDto, { new: true });
        if (!updatedUser) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        return { user: updatedUser };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map