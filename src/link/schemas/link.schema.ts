import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { Linksection } from 'src/linksection/schemas/linksection.schema';

@Schema({ timestamps: true })
export class Link {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Linksection',
    required: true,
  })
  sectionId: Linksection;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  image: string;

  @Prop({ type: Boolean, required: true, default: true })
  active: boolean;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
