import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async  createUser(createUserDto: CreateUserDto): Promise<User> {
      const user:User = new User();
      user.fullname = createUserDto.fullname;
      user.age = createUserDto.age;
      user.email = createUserDto.email;
      user.username = createUserDto.username;
      user.password = createUserDto.password;
      user.role = createUserDto.role;
      user.timestamp = new Date();
      return await this.userRepository.save(user);
    }

  async findAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    return await this.userRepository.findOneBy({id});
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const user:User = new User();
    user.id = id;
    user.fullname = updateUserDto.fullname;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.role = updateUserDto.role;
    user.timestamp = new Date();
    return await this.userRepository.save(user);
  }


  async deleteUser (id: number): Promise<any> { 
    return await this.userRepository.delete(id);
  }

}
