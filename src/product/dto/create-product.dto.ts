import { ProductType } from '../schemas/product.schema';
import { IsBoolean, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;

  @IsNotEmpty()
  @IsEnum(ProductType, { message: 'Please enter correct category' })
  readonly type: ProductType;
}
