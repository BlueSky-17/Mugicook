import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get() 
    async index() {
      return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.service.update(id, updateUserDto);
    }

    @Post() 
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.service.create(createUserDto);
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
}
