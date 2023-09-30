import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

export enum ProductType {
  CARD = 'CARD',
  KEYCHAIN = 'KEYCHAIN',
  STICKER = 'STICKER',
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: Boolean, required: true, default: true })
  active: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  ownerId: User;

  @Prop({ type: String, enum: ProductType, required: true })
  type: ProductType;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
