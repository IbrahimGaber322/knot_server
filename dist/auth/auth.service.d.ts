import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateDto } from './dto/update.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    getUser(user: User): Promise<{
        user: User;
    }>;
    updateUser(user: User, updateDto: UpdateDto): Promise<{
        user: User;
    }>;
}
