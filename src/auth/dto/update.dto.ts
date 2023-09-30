import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsEmail,
  MinLength,
} from 'class-validator';
import { UserType } from '../schemas/user.schema';

export class UpdateDto {
  @IsOptional()
  @IsString()
  readonly fullName: string;
  @IsOptional()
  @IsString()
  readonly username: string;
  @IsOptional()
  @IsString()
  @MinLength(6)
  readonly password: string;
  @IsOptional()
  @IsString()
  readonly bio: string;
  @IsOptional()
  @IsString()
  readonly fcmTokens: string[];
  @IsOptional()
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
}
