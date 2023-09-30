import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateLinksectionDto {
  @IsNotEmpty()
  @IsString()
  readonly label: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
