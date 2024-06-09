import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';

import { IRegisterRepository } from '../domain/interfaces/repositories/register.repository.interface';
import { IUserRepository } from '../domain/interfaces/repositories/user.repository.interface';
import { User } from '../domain/models/user.model';
import { CreateUserDto } from '../shared/dto/users/create-user.dto';

@Injectable()
export class CreateService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly registerRepository: IRegisterRepository,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const register = await this.registerRepository.create({
      name: user.register.name,
      email: user.register.email,
      date: new Date(),
    });

    const userCreated = await this.userRepository.create({
      username: user.username,
      password: this.hashPassword(user.password),
      isFirstAccess: true,
      register: register,
    });
    return userCreated;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  private hashPassword(password: string): string {
    const saltRounds = 8;
    return hashSync(password, saltRounds);
  }
}
