import { ProductType } from '../schemas/product.schema';
import { User } from 'src/auth/schemas/user.schema';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
export class UpdateProductDto {
  @IsOptional()
  @IsBoolean()
  readonly active: boolean;
  @IsOptional()
  @IsString()
  readonly ownerId: User;
  @IsOptional()
  @IsEnum(ProductType, { message: 'Please enter correct product type' })
  readonly type: ProductType;
}
