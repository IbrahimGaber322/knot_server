import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
  ADMIN = 'ADMIN',
  CUSTOMER_SERVICE = 'CUSTOMER_SERVICE',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  bio: string;

  @Prop([String])
  fcmTokens: string[];

  @Prop({ required: true, unique: true })
  primaryEmail: string;

  @Prop({ default: false })
  primaryEmailEnabled: boolean;

  @Prop()
  primaryPhone: string;

  @Prop({ default: false })
  primaryPhoneEnabled: boolean;

  @Prop([String])
  emails: string[];

  @Prop([String])
  phones: string[];

  @Prop({ type: String, enum: UserType, required: true })
  type: UserType;
}
export const UserSchema = SchemaFactory.createForClass(User);
