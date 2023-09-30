import { User } from 'src/auth/schemas/user.schema';

import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateLinksectionDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: User;

  @IsNotEmpty()
  @IsString()
  readonly label: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
