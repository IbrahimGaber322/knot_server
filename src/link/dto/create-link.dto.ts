import { User } from 'src/auth/schemas/user.schema';

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Linksection } from 'src/linksection/schemas/linksection.schema';

export class CreateLinkDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: User;

  @IsNotEmpty()
  @IsString()
  readonly sectionId: Linksection;

  @IsNotEmpty()
  @IsString()
  readonly label: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;

  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @IsOptional()
  @IsString()
  readonly image: string;
}
