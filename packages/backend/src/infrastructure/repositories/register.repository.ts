import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegisterEntity } from '../../domain/entities/register.entity';
import { IRegisterRepository } from '../../domain/interfaces/repositories/register.repository.interface';
import { Register } from '../../domain/models/register.model';

@Injectable()
export class RegisterRepository implements IRegisterRepository {
  constructor(
    @InjectRepository(RegisterEntity)
    private registerRepository: Repository<RegisterEntity>,
  ) {}

  async create(register: Register): Promise<Register> {
    let registerEntity = this.toEntity(register);
    registerEntity = await this.registerRepository.save(registerEntity);
    return this.toModel(registerEntity);
  }

  async findAll(): Promise<Register[]> {
    const userEntities = await this.registerRepository.find();

    return userEntities.map((register) => this.toModel(register));
  }

  async findOne(id: number): Promise<Register | null> {
    const registerEntity = await this.registerRepository.findOneBy({ id });

    return registerEntity ? this.toModel(registerEntity) : registerEntity;
  }

  async remove(id: number): Promise<void> {
    await this.registerRepository.delete(id);
  }

  toEntity(register: Register): RegisterEntity {
    return {
      ...register,
    } as RegisterEntity;
  }

  toModel(register: Register): Register {
    return {
      ...register,
    } as Register;
  }
}
