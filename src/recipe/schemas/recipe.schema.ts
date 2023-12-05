import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type RecipeDocument = Recipe & Document;
// export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
    @Prop()
    name: string;

    @Prop()
    time: number;

    @Prop()
    procedure: string[];
    
    @Prop()
    ingredient: string[];

    @Prop()
    reviewCount: number;

    @Prop()
    star: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);