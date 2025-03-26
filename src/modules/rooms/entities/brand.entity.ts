import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<RoomsEntity>;

@Schema()
export class RoomsEntity {
  @Prop({ type: String})
  roomName: string;
}

export const userSchema = SchemaFactory.createForClass(RoomsEntity);
