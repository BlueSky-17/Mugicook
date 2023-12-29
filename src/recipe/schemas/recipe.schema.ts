import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type RecipeDocument = Recipe & Document;
// export type RecipeDocument = HydratedDocument<Recipe>;

export class Review {
    name: string;
    userId: string;
    time: Date;
    content: string;
}

export class Ingredient {
    name: string;
    quantity: string;
}

export class Rate {
    name: string;
    userId: string;
    time: Date;
    stars: number;
}


@Schema()
export class Recipe {
    @Prop()
    name: string;

    @Prop()
    imagePath: string;
    
    @Prop()
    time: number;

    @Prop()
    price: number;
    
    @Prop()
    startAverage: number;
    
    @Prop()
    startsCount: number;
    
    @Prop()
    reviewsCount: number;

    @Prop()
    savedCount: number;

    @Prop()
    viewsCount: number;

    @Prop()
    totalIngredients: number;
    
    @Prop()
    ingredients: Ingredient[];
    
    @Prop()
    procedure: string[];
    
    @Prop()
    reviews: Review[];
    
    @Prop()
    rates: Rate[];

    @Prop()
    categorie: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);