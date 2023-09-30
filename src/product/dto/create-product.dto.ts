import { User } from 'src/auth/schemas/user.schema';
import { ProductType } from '../schemas/product.schema';
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;

  @IsNotEmpty()
  @IsString()
  readonly ownerId: User;

  @IsNotEmpty()
  @IsEnum(ProductType, { message: 'Please enter correct category' })
  readonly type: ProductType;
}
