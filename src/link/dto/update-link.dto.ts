import { User } from 'src/auth/schemas/user.schema';

import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Linksection } from 'src/linksection/schemas/linksection.schema';

export class UpdateLinkDto {
  @IsOptional()
  @IsString()
  readonly userId: User;

  @IsOptional()
  @IsString()
  readonly sectionId: Linksection;

  @IsOptional()
  @IsString()
  readonly label: string;

  @IsOptional()
  @IsBoolean()
  readonly active: boolean;

  @IsOptional()
  @IsString()
  readonly url: string;

  @IsOptional()
  @IsString()
  readonly image: string;
}
