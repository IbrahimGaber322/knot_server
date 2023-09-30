import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateDto } from './dto/update.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      ...signUpDto,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { primaryEmail, password } = loginDto;
    const user = await this.userModel.findOne({ primaryEmail });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async getUser(user: User): Promise<{ user: User }> {
    const foundUser = await this.userModel
      .findById(user._id)
      .select('-password');
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    return { user: foundUser };
  }

  async updateUser(user: User, updateDto: UpdateDto): Promise<{ user: User }> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      user._id,
      updateDto,
      { new: true },
    );

    if (!updatedUser) {
      throw new UnauthorizedException('Invalid token');
    }
    return { user: updatedUser };
  }
}
