import { Register } from '../../models/register.model';

export interface IRegisterRepository {
  create(user: Register): Promise<Register>;
  findAll(): Promise<Register[]>;
  findOne(id: number): Promise<Register | null>;
  remove(id: number): Promise<void>;
}
