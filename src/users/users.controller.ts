import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe, } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@UsePipes(new ValidationPipe({ transform: true}))
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @ApiTags('Users')
    @Get() 
    async index() {
      return await this.service.findAll();
    }

    @ApiTags('Users')
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }

    @ApiTags('Users')
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.service.update(id, updateUserDto);
    }

    @ApiTags('Users')
    @Post() 
    @UsePipes(new ValidationPipe({ transform: true}))
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.service.create(createUserDto);
    }
    
    @ApiTags('Users')
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }

    @ApiTags('Users')
    @Post('login') 
    @UsePipes(new ValidationPipe({ transform: true}))
    async signIn(@Body() createUserDto: CreateUserDto) {
      var email = createUserDto.email;
      return await this.service.findUserByEmail(email);
    }

}
