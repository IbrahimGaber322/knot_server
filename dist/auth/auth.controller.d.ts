import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';
import { UpdateDto } from './dto/update.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    getUser(req: any): Promise<{
        user: User;
    }>;
    updateUser(req: any, updateDto: UpdateDto): Promise<{
        user: User;
    }>;
}
