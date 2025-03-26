import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class UserEntity {
  @Prop({ type: String })
  phone: string;

  @Prop({ type: String })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(UserEntity);
