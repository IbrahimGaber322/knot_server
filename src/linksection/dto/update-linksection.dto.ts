import { User } from 'src/auth/schemas/user.schema';

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateLinksectionDto {
  @IsOptional()
  @IsString()
  readonly userId: User;

  @IsOptional()
  @IsString()
  readonly label: string;

  @IsOptional()
  @IsBoolean()
  readonly active: boolean;
}
