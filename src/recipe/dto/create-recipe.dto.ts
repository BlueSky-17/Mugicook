import { Recipe } from "../schemas/recipe.schema";
import { Review, Ingredient, Rate } from "../schemas/recipe.schema";

export class CreateRecipeDto {
     
    name: string = "";
    imagePath: string = "";
    time: number = 0;
    price: number = 0;
    startAverage: number = 0;
    startsCount: number = 0;
    reviewsCount: number = 0;
    savedCount: number = 0;
    viewsCount: number = 0;
    totalIngredients: number = 0;
    ingredients: Ingredient[] = []; 
    procedure: string[] = [];
    reviews: Review[] = [];
    rates: Rate[] = [];
    categorie: string = "";
}
