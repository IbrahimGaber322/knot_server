import { ProductType } from '../schemas/product.schema';

import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
export class UpdateProductDto {
  @IsOptional()
  @IsBoolean()
  readonly active: boolean;

  @IsOptional()
  @IsEnum(ProductType, { message: 'Please enter correct product type' })
  readonly type: ProductType;
}
