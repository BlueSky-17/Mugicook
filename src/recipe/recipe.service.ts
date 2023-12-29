import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecipeService {
  constructor(@InjectModel(Recipe.name) private readonly model: Model<RecipeDocument>) {}

  async findAll(): Promise<Recipe[]> {
    return await this.model.find().select('-__v').exec();
  }

  async findOne(id: string): Promise<Recipe> {
    return await this.model.findById(id).select('-__v').exec();
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return await new this.model({
        ...createRecipeDto
    }).save();
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    return await this.model.findByIdAndUpdate(id, updateRecipeDto).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  async findByCategorie(categorie: string): Promise<Recipe[]> {
    return await this.model.find({categorie: categorie}).exec();
  }

  async findByName(query: string): Promise<Recipe[]> {
    var recipes = await this.model.find({name: new RegExp(query, 'i')}).exec();
    return recipes;
  }
}
