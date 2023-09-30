import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Schema({ timestamps: true })
export class Linksection {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ required: true })
  label: string;

  @Prop({ type: Boolean, required: true, default: true })
  active: boolean;
}

export const LinksectionSchema = SchemaFactory.createForClass(Linksection);
