import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<BrandEntity>;

@Schema()
export class BrandEntity {
  @Prop({ type: String})
  brandName: string;
}

export const userSchema = SchemaFactory.createForClass(BrandEntity);
