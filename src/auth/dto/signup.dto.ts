import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  MinLength,
} from 'class-validator';
import { UserType } from '../schemas/user.schema';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly fullName: string;
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
  @IsOptional()
  @IsString()
  readonly bio: string;
  @IsOptional()
  @IsString()
  readonly fcmTokens: string[];
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email.' })
  readonly primaryEmail: string;
  @IsOptional()
  @IsBoolean()
  readonly primaryEmailEnabled: boolean;
  @IsOptional()
  @IsString()
  readonly primaryPhone: string;
  @IsOptional()
  @IsBoolean()
  readonly primaryPhoneEnabled: boolean;
  @IsOptional()
  @IsEmail({}, { message: 'Please enter correct email.' })
  readonly emails: string[];
  @IsOptional()
  @IsString()
  readonly phones: string[];
  @IsOptional()
  @IsEnum(UserType, { message: 'Please enter correct user type.' })
  readonly type: UserType;
  @IsOptional()
  @IsString()
  readonly image: string;
}
