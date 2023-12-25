import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  description: string;

  @Prop()
  password: string;

  @Prop()
  favoriteRecipes: string[];
  
  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);