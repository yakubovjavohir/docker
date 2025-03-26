import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<FilialEntity>;

@Schema()
export class FilialEntity {
  @Prop({ type: String})
  filialName: string;
}

export const userSchema = SchemaFactory.createForClass(FilialEntity);
