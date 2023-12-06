import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('recipe')
@UsePipes(new ValidationPipe({ transform: true}))
export class RecipeController {
  constructor(private readonly service: RecipeService) {}

  @ApiTags('Recipes')
  @Get()
  async index() {
    return await this.service.findAll();
  }

  @ApiTags('Recipes')
  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @ApiTags('Recipes')
  @Post()
  @UsePipes(new ValidationPipe({ transform: true}))
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return await this.service.create(createRecipeDto);
  }

  @ApiTags('Recipes')
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return await this.service.update(id, updateRecipeDto);
  }

  @ApiTags('Recipes')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
