import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';


@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(Users)
      private usersRepository: Repository<Users>,
    ) {} 

    async create(createUsersDto: CreateUsersDto) {
      const  users = await this.usersRepository.create(createUsersDto);
      const toCreate = await this.usersRepository.insert(users);
      return toCreate;
    }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id: id });
  }

  async update(id: number, updateusersDto: UpdateUsersDto) {
    let Users = await this.usersRepository.findOneBy({ id: id });
    Users = {
      ...Users,
      ...updateusersDto,
    };
    const toUpdate = await this.usersRepository.save(Users);
    return toUpdate;
  }

  async remove(id: number) {
    const toDelete = await this.usersRepository.delete(id);
    return toDelete;
  }
}
