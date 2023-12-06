import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

    async findAll(): Promise<User[]> {
        return await this.model.find().select('-__v').exec();
    }

    async findOne(id: string): Promise<User> {
        return await this.model.findById(id).select('-__v').exec();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await new this.model({
            ...createUserDto
        }).save();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return await this.model.findByIdAndUpdate(id, updateUserDto).exec();
    }

    async delete(id: string): Promise<any> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
