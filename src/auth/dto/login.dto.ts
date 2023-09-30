import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email.' })
  readonly primaryEmail: string;
}
