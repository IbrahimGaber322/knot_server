import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateLinksectionDto {
  @IsOptional()
  @IsString()
  readonly label: string;

  @IsOptional()
  @IsBoolean()
  readonly active: boolean;
}
