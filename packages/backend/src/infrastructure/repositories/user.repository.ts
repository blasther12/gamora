import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegisterEntity } from '../../domain/entities/register.entity';
import { UserEntity } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/interfaces/repositories/user.repository.interface';
import { User } from '../../domain/models/user.model';

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(user: User): Promise<User> {
    const userEntity = this.toEntity(user);
    await this.usersRepository.save(userEntity);
    return this.toModel(userEntity);
  }

  async findAll(): Promise<User[]> {
    const userEntities = await this.usersRepository.find({
      relations: ['register'],
    });

    return userEntities.map((user) => this.toModel(user));
  }

  async findOne(id: number): Promise<User | null> {
    const userEntity = await this.usersRepository.findOneBy({ id });

    return this.toModel(userEntity);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  toEntity(user: User): UserEntity {
    return {
      ...user,
      is_first_acess: user.isFirstAccess,
      register: {
        ...user.register,
      } as RegisterEntity,
    } as UserEntity;
  }

  toModel(user: UserEntity): User {
    return {
      id: user.id,
      username: user.username,
      password: user.password,
      isFirstAccess: user.is_first_acess,
      register: {
        ...user.register,
      },
    } as User;
  }
}
