import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {UserEntity} from '../../user/entities/user.entity'

export type UserDetailsDocument = HydratedDocument<UserDetailsEntity>;

@Schema()
export class UserDetailsEntity {
  @Prop({ type: String })
  fullName: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: Types.ObjectId, ref: 'UserEntity', unique: true, required: true })
  userId: Types.ObjectId;
}

export const productSchema = SchemaFactory.createForClass(UserDetailsEntity);
