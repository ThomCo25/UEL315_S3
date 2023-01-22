import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './users.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private readonly usersModel: Model < UsersDocument > ) {}

  async create(createUsersDto: CreateUsersDto): Promise < UsersDocument > {
    const users = new this.usersModel(createUsersDto);
    return users.save();
  }

  async findAll(): Promise < UsersDocument[] > {
    return this.usersModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.usersModel.findById(id);
  }

  async update(id: string, updateUsersDto: UpdateUsersDto): Promise < UsersDocument > {
    return this.usersModel.findByIdAndUpdate(id, updateUsersDto);
  }

  async remove(id: string) {
    return this.usersModel.findByIdAndRemove(id);
  }
}
