import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './schemas/user.schema';
import { UpdateDto } from './dto/update.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
  @Get('/user')
  @UseGuards(AuthGuard())
  getUser(@Req() req): Promise<{ user: User }> {
    return this.authService.getUser(req.user);
  }

  @Patch('/user')
  @UseGuards(AuthGuard())
  updateUser(
    @Req() req,
    @Body() updateDto: UpdateDto,
  ): Promise<{ user: User }> {
    return this.authService.updateUser(req.user, updateDto);
  }
}
