import { Recipe } from "../schemas/recipe.schema";

export class CreateRecipeDto {
    name: string = "";
    time: number = 0;
    procedure: string[] = [];
    ingredient: string[] = [];
    star: number = 0;
    reviewCount: number = 0;
}
